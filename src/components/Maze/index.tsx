import Cell from 'components/Cell';
import { ICell } from 'interface/ICell';
import { IMaze } from 'interface/IMaze';
import { CellFactory } from 'model/CellFactory';
import { MazeFactory } from 'model/MazeFactory';
import { useEffect, useState } from 'react';

import './Maze.scss';
function Maze() {
    const [maze, setMaze] = useState<IMaze | null>(null);

    useEffect(() => {
        setMaze(MazeFactory.setup(700, 700, 70));
    }, []);

    useEffect(() => {
        if (maze) {
            let currentUpdate: ICell | undefined = maze.current;
            const stackUpdate = maze.stack;
            const next = CellFactory.checkNeighbors(currentUpdate, maze.grid, maze.rows, maze.colums);
            let gridUpdate: Array<Array<ICell>> = maze.grid;
            if (next) {
                next.visited = true;
                next.current = true;
                currentUpdate.current = false;
                gridUpdate = CellFactory.removeWalls(currentUpdate, next, maze.grid);

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
        <section className="container-maze">
            <div className="maze">
                {maze &&
                    maze.grid.map((row, index) => (
                        <div key={index}>
                            {row.map((cell, index) => (
                                <Cell key={index} cell={cell}>
                                    {cell.rowNum + cell.colNum * maze.colums}
                                </Cell>
                            ))}
                        </div>
                    ))}
            </div>
        </section>
    );
}

export default Maze;
