import { INodeCell } from './INode';

export interface IGraph {
    listNode: Map<number, INodeCell>;
    amountNode: number;
    initial: INodeCell;
    final: INodeCell;
}
