import { ICell } from './ICell';

export interface INodeCell {
    adjacencyList: Array<ICell>;
    visitado: boolean;
    adjListAmount: number;
    distance: number;
    cell: ICell;
    f: number;
    g: number;
    h: number;
}
export interface INodeNumber {
    adjacencyList: Array<number>;
    visitado: boolean;
    adjListAmount: number;
    distance: number;
    num: number;
    f: number;
    g: number;
    h: number;
}
