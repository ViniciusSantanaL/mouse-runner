import { ICell } from './ICell';

export interface IMaze {
    witdhCell: number;
    rows: number;
    colums: number;
    grid: Array<Array<ICell>>;
    current: ICell | undefined;
}
