import { Cell } from 'components/Cell';
import { ICell } from 'interface/ICell';
import { IMaze } from 'interface/IMaze';
import { useEffect, useState } from 'react';
import { GraphService } from 'service/GraphService';
import { GraphSetupService } from 'service/GraphSetupService';

import { Container, StyledMaze } from './styles';

interface FinalMazeProps {
    maze: IMaze | null;
}
export function FinalMaze({ maze }: FinalMazeProps) {
    const [finalMaze, setFinalMaze] = useState(maze);

    useEffect(() => {
        if (maze) {
            if (maze.initial && maze.final) {
                const graph = GraphSetupService.doGraph(maze.grid, maze.initial, maze.final);
                const path = GraphService.doAStar(graph);
                if (path) {
                    path.pop();
                    const gridUpdated = maze.grid;

                    for (let i = 0; i < path.length; i++) {
                        const cell = path[i].cell;

                        gridUpdated[cell.rowNum][cell.colNum].bestPath = true;
                    }
                    console.log(finalMaze);
                    if (finalMaze) setFinalMaze({ ...finalMaze, grid: gridUpdated });
                }
            }
        }
    }, []);

    return (
        <Container width={finalMaze?.width ? finalMaze?.width : 600}>
            <StyledMaze width={finalMaze?.width ? finalMaze?.width : 600}>
                {finalMaze &&
                    finalMaze.grid.map((row, index) => (
                        <div key={index}>
                            {row.map((cell, index) => (
                                <Cell key={index} cell={cell} widthCell={finalMaze.witdhCell}>
                                    {cell.bestPath && 1}
                                </Cell>
                            ))}
                        </div>
                    ))}
            </StyledMaze>
        </Container>
    );
}
