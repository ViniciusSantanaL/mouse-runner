import { ICell } from 'interface/ICell';
import { IMaze } from 'interface/IMaze';
import { CellService } from 'service/CellService';
import { MazeService } from 'service/MazeService';
import { useEffect, useState } from 'react';
import { Container, StyledMaze } from './styles';
import { useLoading } from 'hooks/useLoading';
import { useMessage } from 'hooks/useMessage';
import { InitialCell } from 'components/InitialCell';

interface MazeProps {
    maze: IMaze | null;
    setMaze: React.Dispatch<React.SetStateAction<IMaze | null>>;
}
export function InitialMaze({ maze, setMaze }: MazeProps) {
    const { isLoading, setIsLoading } = useLoading();

    const [positionInitialCell, setPositionInitialCell] = useState<number[]>([]);
    const [positionFinalCell, setPositionFinalCell] = useState<number[]>([]);

    const { message, setMessage } = useMessage();

    function handleInitialAndFinalCell(positionX: number, positionY: number) {
        if (positionFinalCell.length > 0) return;

        if (positionInitialCell.length > 0) {
            setPositionFinalCell([positionX, positionY]);
        } else {
            setPositionInitialCell([positionX, positionY]);
            new Map();
        }
    }
    useEffect(() => {
        if (positionInitialCell.length > 0 && maze?.initial == undefined) {
            const gridUpdate = maze?.grid;
            const oldCurrent = maze?.current;
            if (gridUpdate && oldCurrent) {
                gridUpdate[oldCurrent.rowNum][oldCurrent.colNum].current = false;
                gridUpdate[positionInitialCell[0]][positionInitialCell[1]].initial = true;
                gridUpdate[positionInitialCell[0]][positionInitialCell[1]].current = true;
                const currentCell = gridUpdate[positionInitialCell[0]][positionInitialCell[1]];

                setMaze({ ...maze, grid: gridUpdate, current: currentCell, initial: currentCell });
            }
        } else if (positionFinalCell.length > 0 && maze?.final == undefined) {
            const gridUpdate = maze?.grid;
            if (gridUpdate) {
                const finalCell = gridUpdate[positionFinalCell[0]][positionFinalCell[1]];
                gridUpdate[positionFinalCell[0]][positionFinalCell[1]].final = true;
                setMessage('All Right, Click in button to Start');
                setMaze({ ...maze, grid: gridUpdate, final: finalCell });
            }
        }
    }, [positionInitialCell, positionFinalCell]);

    useEffect(() => {
        setMessage('Waiting the Maze to be a builder');
        setMaze(MazeService.setup(800, 20, 20));
    }, []);

    useEffect(() => {
        if (maze) {
            setIsLoading(true);
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
            } else {
                if (message == 'Waiting the Maze to be a builder') setMessage('Choose the Initial Home and Final Home');
                setIsLoading(false);
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
                                <InitialCell key={index} cell={cell} widthCell={maze.witdhCell} setStatus={handleInitialAndFinalCell} isLoading={isLoading}>
                                    {cell.rowNum + cell.colNum * maze.colums + 1}
                                </InitialCell>
                            ))}
                        </div>
                    ))}
            </StyledMaze>
        </Container>
    );
}
