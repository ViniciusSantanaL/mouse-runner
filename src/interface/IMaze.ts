import { ICell } from './ICell';

export interface IMaze {
    witdhCell: number;
    width: number;
    rows: number;
    colums: number;
    grid: Array<Array<ICell>>;
    current: ICell;
    stack: Array<ICell>;
}
