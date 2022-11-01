import { Cell } from 'components/Cell';
import { ICell } from 'interface/ICell';
import { IMaze } from 'interface/IMaze';
import { useEffect, useState } from 'react';
import { GraphSetupService } from 'service/GraphSetupService';

import { Container, StyledMaze } from './styles';

interface MazeProps {
    maze: IMaze | null;
    restartMaze: boolean;
    setRestartMaze: React.Dispatch<React.SetStateAction<boolean>>;
}
export function Maze({ maze, restartMaze, setRestartMaze }: MazeProps) {
    const [initialMaze, setInitialMaze] = useState<IMaze>({} as IMaze);
    const [mouseMaze, setMouseMaze] = useState<IMaze | null>(maze);

    useEffect(() => {
        if (restartMaze) {
            setMouseMaze(initialMaze);
            setRestartMaze(false);
        }
    }, [restartMaze]);

    useEffect(() => {
        if (maze) {
            if (maze.initial && maze.final) {
                setInitialMaze(maze);
                setMouseMaze(maze);
            }
        }
    }, []);

    return (
        <Container width={mouseMaze?.width ? mouseMaze?.width : 600}>
            <StyledMaze width={mouseMaze?.width ? mouseMaze?.width : 600}>
                {mouseMaze &&
                    mouseMaze.grid.map((row, index) => (
                        <div key={index}>
                            {row.map((cell, index) => (
                                <Cell key={index} cell={cell} widthCell={mouseMaze.witdhCell}></Cell>
                            ))}
                        </div>
                    ))}
            </StyledMaze>
        </Container>
    );
}
