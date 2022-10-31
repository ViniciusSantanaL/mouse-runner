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
    }
    static AddNodesInGraphsAndMakeAdjList(graph: IGraph, cell: ICell, grid: ICell[][]) {
        const listNeighbors = this.checkNeighbors(cell, grid);

        if (!this.checkIfNodeExistInGraph(graph, cell.numberCell)) {
            this.addVertices(graph, cell);
        }

        for (let i = 0; i < listNeighbors.length; i++) {
            const neightbor = listNeighbors[i];
            if (!this.checkIfNodeExistInGraph(graph, neightbor.numberCell)) {
                this.addVertices(graph, listNeighbors[i]);
            }
            this.addNodeInAdjacencyList(cell, neightbor, graph);
        }
    }
    static checkIfNodeExistInGraph(graph: IGraph, numberCell: number) {
        if (graph.listNode.get(numberCell)) {
            return true;
        } else {
            return false;
        }
    }
    static addNodeInAdjacencyList(cell: ICell, neightbor: ICell, graph: IGraph) {
        (graph.listNode.get(neightbor.numberCell) as INodeCell).adjacencyList.push(cell);
        (graph.listNode.get(cell.numberCell) as INodeCell).adjacencyList.push(neightbor);

        (graph.listNode.get(cell.numberCell) as INodeCell).adjListAmount++;
        (graph.listNode.get(neightbor.numberCell) as INodeCell).adjListAmount++;
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
        const nodeCell: INodeCell = { adjacencyList: [], adjListAmount: 0, cell: cell, distance: 0, visitado: false, f: 0, g: 0, h: 0 };

        graph.listNode.set(cell.numberCell, nodeCell);
    }
}
