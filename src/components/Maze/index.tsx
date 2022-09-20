import Cell from 'components/Cell';
import { ICell } from 'interface/ICell';
import { IMaze } from 'interface/IMaze';
import { CellService } from 'service/CellService';
import { MazeService } from 'service/MazeService';
import { useEffect, useState } from 'react';
import { Container, StyledMaze } from './styles';

export default function Maze() {
    const [maze, setMaze] = useState<IMaze | null>(null);

    useEffect(() => {
        setMaze(MazeService.setup(700, 700, 70));
    }, []);

    useEffect(() => {
        if (maze) {
            let currentUpdate: ICell | undefined = maze.current;
            const stackUpdate = maze.stack;
            const next = CellService.checkNeighbors(currentUpdate, maze.grid, maze.rows, maze.colums);
            let gridUpdate: Array<Array<ICell>> = maze.grid;
            if (next) {
                next.visited = true;
                next.current = true;
                currentUpdate.current = false;
                gridUpdate = CellService.removeWalls(currentUpdate, next, maze.grid);

                stackUpdate.push(currentUpdate);

                setMaze({ ...maze, grid: gridUpdate, current: next, stack: stackUpdate });
            } else if (maze.stack.length > 0) {
                gridUpdate[currentUpdate.rowNum][currentUpdate.colNum].current = false;
                currentUpdate = stackUpdate.pop();

                if (currentUpdate) {
                    gridUpdate[currentUpdate.rowNum][currentUpdate.colNum].current = true;
                    setMaze({ ...maze, grid: gridUpdate, current: currentUpdate, stack: stackUpdate });
                }
            }
        }
    }, [maze]);
    return (
        <Container>
            <StyledMaze>
                {maze &&
                    maze.grid.map((row, index) => (
                        <div key={index}>
                            {row.map((cell, index) => (
                                <Cell key={index} cell={cell}>
                                    {cell.rowNum + cell.colNum * maze.colums + 1}
                                </Cell>
                            ))}
                        </div>
                    ))}
            </StyledMaze>
        </Container>
    );
}
