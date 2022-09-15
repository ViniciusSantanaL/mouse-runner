import { Cell } from './Cell';

export interface Maze {
    witdhCell: number;
    rows: number;
    colums: number;
    grid: Array<Array<Cell>>;
}
