import { IMaze } from 'interface/IMaze';
import { GraphCell } from './GraphCell/intex';
import { Container, ContainerMaze, EmptyDiv, StyledGraph } from './styles';

interface GraphProps {
    maze: IMaze | null;
}

export function Graph({ maze }: GraphProps) {
    
    return (
        <Container>
            <ContainerMaze width={maze?.width ? maze?.width  : 600}>
                <StyledGraph width={maze?.width ? maze?.width  : 600}>
                    {maze &&
                        maze.grid.map((row, index) => (
                            <div key={index}>
                                {row.map((cell, index) => {
                                    if(cell.visitedMouse)
                                        return <GraphCell key={index} cell={cell} widthCell={maze.witdhCell} />
                                    else
                                        return <EmptyDiv widthCell={maze.witdhCell}></EmptyDiv>
                                })}
                            </div>
                        ))}
                </StyledGraph>
            </ContainerMaze>
        </Container>
    );
}
