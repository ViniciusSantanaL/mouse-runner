import { ICell } from 'interface/ICell';
import { IGraph } from 'interface/IGraph';
import { INodeCell } from 'interface/INode';

export abstract class GraphSetupService {
    private static setupGraphs(amountNodes: number): IGraph {
        const graph: IGraph = { listNode: new Map(), amountNode: amountNodes, initial: {} as INodeCell, final: {} as INodeCell };
        return graph;
    }

    static doGraph(grid: ICell[][], initialCell: ICell, finalCell: ICell) {
        const amountNodes = grid.length;
        const graph: IGraph = this.setupGraphs(amountNodes);

        for (let xAxis = 0; xAxis < grid.length; xAxis++) {
            const innerArrayLenght = grid[xAxis].length;
            for (let yAxis = 0; yAxis < innerArrayLenght; yAxis++) {
                const actualCell = grid[xAxis][yAxis];
                this.AddNodesInGraphsAndMakeAdjList(graph, actualCell, grid);
            }
        }
        graph.initial = graph.listNode.get(initialCell.numberCell) as INodeCell;
        graph.final = graph.listNode.get(finalCell.numberCell) as INodeCell;

        return graph;
    }
    static AddNodesInGraphsAndMakeAdjList(graph: IGraph, cell: ICell, grid: ICell[][]) {
        const listNeighbors = this.checkNeighbors(cell, grid);

        if (!this.checkIfNodeExistInGraph(graph, cell.numberCell)) {
            this.addVertices(graph, cell);
        }
        const node = graph.listNode.get(cell.numberCell) as INodeCell;

        for (let i = 0; i < listNeighbors.length; i++) {
            const neighborCell = listNeighbors[i];
            if (!this.checkIfNodeExistInGraph(graph, neighborCell.numberCell)) {
                this.addVertices(graph, listNeighbors[i]);
            }
            const neighborNode = graph.listNode.get(neighborCell.numberCell) as INodeCell;

            this.addNodeInAdjacencyList(node, neighborNode, graph);
        }
    }
    static checkIfNodeExistInGraph(graph: IGraph, numberCell: number) {
        if (graph.listNode.get(numberCell)) {
            return true;
        } else {
            return false;
        }
    }
    static addNodeInAdjacencyList(node: INodeCell, neightbor: INodeCell, graph: IGraph) {
        (graph.listNode.get(node.numNode) as INodeCell).adjacencyList.push(neightbor);
    }

    static checkNeighbors(cell: ICell, grid: ICell[][]): Array<ICell> {
        const listNeighbors: Array<ICell> = [];
        if (!cell.walls[0]) {
            listNeighbors.push(grid[cell.rowNum][cell.colNum - 1]);
        }
        if (!cell.walls[1]) {
            listNeighbors.push(grid[cell.rowNum + 1][cell.colNum]);
        }
        if (!cell.walls[2]) {
            listNeighbors.push(grid[cell.rowNum][cell.colNum + 1]);
        }
        if (!cell.walls[3]) {
            listNeighbors.push(grid[cell.rowNum - 1][cell.colNum]);
        }
        return listNeighbors;
    }
    static addVertices(graph: IGraph, cell: ICell) {
        const node: INodeCell = { adjacencyList: [], cell: cell, distance: 0, visitado: false, f: 0, g: 0, h: 0, numNode: cell.numberCell, previous: undefined };

        graph.listNode.set(cell.numberCell, node);
    }
}
