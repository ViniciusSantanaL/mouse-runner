import { IGraph } from 'interface/IGraph';
import { INodeCell } from 'interface/INode';

export abstract class GraphService {
    static doDFS(graph: IGraph, rootNode: INodeCell, distance: number) {
        if (rootNode.visitado) return;

        rootNode.visitado = true;
        rootNode.distance = distance;
        for (var i = 0; i < rootNode.adjListAmount; i++) {
            const childrenNode = graph.listNode.get(rootNode.adjacencyList[i].numberCell);
            if (!childrenNode?.visitado && childrenNode) {
                this.doDFS(graph, childrenNode, distance + 1);
            }
        }
    }


    static doAStar(graph: IGraph) {
        const openSet = [graph.initial];
        const start = graph.initial;
        const end = graph.final;

        while (openSet.length > 0) {
            var winner = 0;
            for (var i = 1; i < openSet.length; i++) {
                if(openSet[i].g < )
            }

        }
    }
}
