import { Cell } from 'components/Cell';
import { ICell } from 'interface/ICell';
import { IMaze } from 'interface/IMaze';
import { useEffect, useState } from 'react';
import { GraphSetupService } from 'service/GraphSetupService';

import { Container, StyledMaze } from './styles';

interface MazeProps {
    maze: IMaze | null;
    setMaze: React.Dispatch<React.SetStateAction<IMaze | null>>;
}
export function Maze({ maze, setMaze }: MazeProps) {
    const [gridAStar, setGridAStart] = useState<ICell[][]>();

    useEffect(() => {
        if (maze) {
            if (maze.initial && maze.final) {
                GraphSetupService.doGraph(maze.grid, maze.initial, maze.final);
            }
        }
    }, []);
    useEffect(() => {}, []);
    return (
        <Container width={maze?.width ? maze?.width : 600}>
            <StyledMaze width={maze?.width ? maze?.width : 600}>
                {maze &&
                    maze.grid.map((row, index) => (
                        <div key={index}>
                            {row.map((cell, index) => (
                                <Cell key={index} cell={cell} widthCell={maze.witdhCell}></Cell>
                            ))}
                        </div>
                    ))}
            </StyledMaze>
        </Container>
    );
}
