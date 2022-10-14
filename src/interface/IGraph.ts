import { ICell } from './ICell';
import { INodeCell, INodeNumber } from './INode';

export interface IGraphCells {
    listNode: Map<number, INodeCell>;
    amountNode: number;
    initial: ICell;
    final: ICell;
}
export interface IGraphNumber {
    listNode: Map<number, INodeNumber>;
    amountNode: number;
    initial: number;
    final: number;
}
