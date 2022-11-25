import { Cell } from 'components/Cell';
import { ICell } from 'interface/ICell';
import { IMaze } from 'interface/IMaze';
import { useEffect, useState } from 'react';
import { GraphService } from 'service/GraphService';
import { GraphSetupService } from 'service/GraphSetupService';
import { MazeService } from 'service/MazeService';

import { Container, StyledMaze } from './styles';

interface FinalMazeProps {
    maze: IMaze | null;
}
export function FinalMaze({ maze }: FinalMazeProps) {
    const [finalMaze, setFinalMaze] = useState({ ...maze, grid: MazeService.createNewCellsAndCopyOldCells(maze?.grid as ICell[][], maze?.initial as ICell, maze?.final as ICell) });

    useEffect(() => {
        if (finalMaze) {
            if (finalMaze.initial && finalMaze.final) {
                const graph = GraphSetupService.doGraph(finalMaze.grid as ICell[][], finalMaze.initial, finalMaze.final);
                const path = GraphService.doAStar(graph);
                if (path) {
                    path.pop();
                    const gridUpdated = finalMaze.grid as ICell[][];

                    for (let i = 0; i < path.length; i++) {
                        const cell = path[i].cell;

                        gridUpdated[cell.rowNum][cell.colNum].bestPath = true;
                    }
                    if (finalMaze) setFinalMaze({ ...finalMaze, grid: gridUpdated });
                }
            }
        }
    }, []);

    return (
        <Container width={finalMaze?.width ? finalMaze?.width : 600}>
            <StyledMaze width={finalMaze?.width ? finalMaze?.width : 600}>
                {finalMaze?.grid &&
                    finalMaze.grid.map((row, index) => (
                        <div key={index}>
                            {row.map((cell, index) => (
                                <Cell key={index} cell={cell} widthCell={finalMaze.witdhCell as number}>
                                    {cell.bestPath && 1}
                                </Cell>
                            ))}
                        </div>
                    ))}
            </StyledMaze>
        </Container>
    );
}
