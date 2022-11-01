import { ICell } from './ICell';

export interface INodeCell {
    adjacencyList: Array<INodeCell>;
    visitado: boolean;
    distance: number;
    numNode: number;
    cell: ICell;
    f: number;
    g: number;
    h: number;
    previous: INodeCell | undefined;
}
