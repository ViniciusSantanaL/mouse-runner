import Cell from 'components/Cell';
import { useEffect, useState } from 'react';
import { MazeService } from 'service/MazeService';
import { Container } from '../styled';
import { StyledMaze } from './styles';

export default function Grid() {
    const [maze, setMaze] = useState(MazeService.setup(700));

    return (
        <Container>
            <StyledMaze>
                {maze.grid.map((row, index) => (
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
