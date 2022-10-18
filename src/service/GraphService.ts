import { IGraphCells, IGraphNumber } from 'interface/IGraph';
import { INodeCell, INodeNumber } from 'interface/INode';

type Graphs = {
    graphCells: IGraphCells;
    graphNumber: IGraphNumber;
};

export abstract class GraphService {
    static doDFS(graph: IGraphNumber, rootNode: INodeNumber, distance: number) {
        if (rootNode.visitado) return;

        rootNode.visitado = true;
        rootNode.distance = distance;
        for (var i = 0; i < rootNode.adjListAmount; i++) {
            const childrenNode = graph.listNode.get(rootNode.adjacencyList[i]);
            if (!childrenNode?.visitado && childrenNode) {
                this.doDFS(graph, childrenNode, distance + 1);
            }
        }
    }
    static doBFS() {}
}
