import { ICell } from 'interface/ICell';
import Node from './Node';
import { StyledCell } from './styles';

interface CellProps {
    cell: ICell;
    widthCell: number;
    children?: React.ReactNode;
}
export function Cell({ cell, widthCell, children }: CellProps) {
    return (
        <StyledCell
            initial={cell.initial}
            final={cell.final}
            top={cell.walls[0]}
            right={cell.walls[1]}
            bottom={cell.walls[2]}
            left={cell.walls[3]}
            visitedMouse={cell.visitedMouse}
            current={cell.current}
            widthCell={widthCell}
        >
            {cell.current && <img src={require('assets/Home/mouse.png')} />}
        </StyledCell>
    );
}
