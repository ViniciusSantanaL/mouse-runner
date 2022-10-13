export interface INode {
    adjacencyList: Array<INode>;
    visitado: boolean;
    adjListAmount: number;
    distance: number;
}
