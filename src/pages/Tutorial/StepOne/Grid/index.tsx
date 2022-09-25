import Cell from 'components/Cell';
import { IMaze } from 'interface/IMaze';
import { useEffect, useState } from 'react';
import { MazeService } from 'service/MazeService';

import { ContainerGrid, StyledMaze } from './styles';

export default function Grid(prop: { width: number; rows: number; columns: number }) {
    const [maze, setMaze] = useState<IMaze>(MazeService.setup(800, 20, 20));
    useEffect(() => {
        setMaze((oldMaze) => MazeService.updateMaze(oldMaze, prop.width, prop.rows, prop.columns));
    }, [prop.width, prop.rows, prop.columns]);

    return (
        <ContainerGrid>
            <StyledMaze width={maze.width}>
                {maze.grid.map((row, index) => (
                    <div key={index}>
                        {row.map((cell, index) => (
                            <Cell key={index} cell={cell} widthCell={maze.witdhCell}>
                                {cell.rowNum + cell.colNum * maze.colums + 1}
                            </Cell>
                        ))}
                    </div>
                ))}
            </StyledMaze>
        </ContainerGrid>
    );
}
