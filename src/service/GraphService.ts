import { IGraph } from 'interface/IGraph';
import { INodeCell } from 'interface/INode';

export abstract class GraphService {
    static doDFS(graph: IGraph, rootNode: INodeCell, distance: number) {
        if (rootNode.visitado) return;

        rootNode.visitado = true;
        rootNode.distance = distance;
        for (let i = 0; i < rootNode.adjacencyList.length; i++) {
            const childrenNode = graph.listNode.get(rootNode.adjacencyList[i].numNode);
            if (!childrenNode?.visitado && childrenNode) {
                this.doDFS(graph, childrenNode, distance + 1);
            }
        }
    }

    static doAStar(graph: IGraph) {
        const openSet = [graph.initial];
        const closedSet = [];
        const end = graph.final;
        const path = [];
        while (openSet.length > 0) {
            let winner = 0;
            for (let i = 1; i < openSet.length; i++) {
                if (openSet[i].f < openSet[winner].f) {
                    winner = i;
                }
            }
            const current = openSet[winner];

            if (current.cell.numberCell === end.cell.numberCell) {
                let temp = current;
                path.push(temp);
                while (temp.previous != undefined) {
                    path.push(temp.previous);
                    temp = temp.previous;
                }
                return path;
            }
            this.removeFromArray(current, openSet);
            closedSet.push(current);

            const neighbors = current.adjacencyList;

            for (let i = 0; i < neighbors.length; i++) {
                const neighbor = neighbors[i];
                if (!closedSet.includes(neighbor)) {
                    const tempG = current.g + 1;
                    if (openSet.includes(neighbor)) {
                        if (tempG < neighbor.g) {
                            neighbor.g = tempG;
                        }
                    } else {
                        neighbor.g = tempG;
                        openSet.push(neighbor);
                    }
                    neighbor.h = this.calculateHeuristic(neighbor, end);
                    neighbor.f = neighbor.g + neighbor.h;
                    neighbor.previous = current;
                }
            }
        }
    }

    static removeFromArray(node: INodeCell, array: INodeCell[]) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i].cell.numberCell == node.cell.numberCell) array.splice(i, 1);
        }
    }
    static calculateHeuristic(actualNode: INodeCell, end: INodeCell) {
        return Math.abs(actualNode.cell.rowNum - end.cell.rowNum) + Math.abs(actualNode.cell.colNum - end.cell.colNum);
    }
}
