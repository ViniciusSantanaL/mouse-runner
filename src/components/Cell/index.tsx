import { ICell } from 'interface/ICell';
import Node from './Node';
import { StyledCell } from './styles';

export default function Cell(props: { cell: ICell; widthCell: number; children: React.ReactNode }) {
    return (
        <StyledCell
            top={props.cell.walls[0]}
            right={props.cell.walls[1]}
            bottom={props.cell.walls[2]}
            left={props.cell.walls[3]}
            visited={props.cell.visited}
            current={props.cell.current}
            widthCell={props.widthCell}
        >
            <Node>{props.children}</Node>
        </StyledCell>
    );
}
