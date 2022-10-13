import { ICell } from 'interface/ICell';
import Node from './Node';
import { StyledCell } from './styles';

interface CellProps {
    cell: ICell;
    widthCell: number;
    children?: React.ReactNode;
    setStatus?: (positionX: number, positionY: number) => void;
    isLoading?: boolean;
}
export function InitialCell({ cell, widthCell, children, setStatus, isLoading }: CellProps) {
    return (
        <StyledCell
            onClick={() => {
                if (!isLoading && setStatus) setStatus(cell.rowNum, cell.colNum);
            }}
            initial={cell.initial}
            final={cell.final}
            top={cell.walls[0]}
            right={cell.walls[1]}
            bottom={cell.walls[2]}
            left={cell.walls[3]}
            visited={cell.visited}
            current={cell.current}
            widthCell={widthCell}
        >
            <Node>{children}</Node>
        </StyledCell>
    );
}
