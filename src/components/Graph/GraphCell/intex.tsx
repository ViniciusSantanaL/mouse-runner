import { ICell } from "interface/ICell";
import GraphNode from "./Node";
import { StyledGraphCell } from "./styles";


interface CellProps {
    cell: ICell;
    widthCell: number;
    
}
export function GraphCell({ cell, widthCell }: CellProps) {
    
    return (
        <StyledGraphCell
            widthCell={widthCell}
        >
            <GraphNode initial={cell.initial} final={cell.final} current={cell.current}>{cell.numberCell}</GraphNode>
        </StyledGraphCell>
    );
}