import Cell from 'components/Cell';
import { useEffect, useState } from 'react';
import { MazeService } from 'service/MazeService';
import { Container } from '../styled';
import { StyledMaze } from './styles';

export default function Grid() {
    const [maze, setMaze] = useState(MazeService.setup(700));

    const [width, setWidth] = useState(700);
    const [row, setRow] = useState(10);
    const [columns, setColumns] = useState(10);

    useEffect(() => {
        setMaze(MazeService.updateMaze(maze, row, columns));
    }, [width]);

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
            <h1>Primeiro Passo</h1>
        </Container>
    );
}
