import { Cell } from './Cell';

export interface IMaze {
    witdhCell: number;
    rows: number;
    colums: number;
    grid: Array<Array<Cell>>;
}
