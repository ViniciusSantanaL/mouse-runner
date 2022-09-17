import { ICell } from 'interface/ICell';
import { useEffect, useState } from 'react';
import { StyledCell } from './styles';

export default function Cell(props: { cell: ICell }) {
    return (
        <StyledCell top={props.cell.walls[0]} right={props.cell.walls[1]} bottom={props.cell.walls[2]} left={props.cell.walls[3]} visited={props.cell.visited} current={props.cell.current}>
            {2}
        </StyledCell>
    );
}
