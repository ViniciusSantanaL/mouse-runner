import { Cell } from 'components/Cell';
import { ICell } from 'interface/ICell';
import { IGraphCells, IGraphNumber } from 'interface/IGraph';
import { INodeCell, INodeNumber } from 'interface/INode';
import { CellService } from './CellService';

type Graphs = {
    graphCells: IGraphCells;
    graphNumber: IGraphNumber;
};

export abstract class GraphService {
    private static setupGraphs(initialCell: ICell, finalCell: ICell, amountNodes: number): Graphs {
        const graphCells: IGraphCells = { listNode: new Map(), amountNode: amountNodes, initial: initialCell, final: finalCell };

        const numInitialCell = initialCell.rowNum + initialCell.colNum * amountNodes + 1;
        const numFinalCell = finalCell.rowNum + finalCell.colNum * amountNodes + 1;
        const graphNumber: IGraphNumber = { listNode: new Map(), amountNode: amountNodes, initial: numInitialCell, final: numFinalCell };

        const graphs: Graphs = { graphCells: graphCells, graphNumber: graphNumber };
        return graphs;
    }

    static doGraph(grid: ICell[][], initialCell: ICell, finalCell: ICell) {
        const amountNodes = grid.length;

        const graphs: Graphs = this.setupGraphs(initialCell, finalCell, amountNodes);

        for (let xAxis = 0; xAxis < grid.length; xAxis++) {
            const innerArrayLenght = grid[xAxis].length;
            for (let yAxis = 0; yAxis < innerArrayLenght; yAxis++) {
                const actualCell = grid[xAxis][yAxis];
                this.AddNodesInGraphsAndMakeAdjList(graphs, actualCell, grid);
            }
        }
    }
    static AddNodesInGraphsAndMakeAdjList(graphs: Graphs, cell: ICell, grid: ICell[][]) {
        const colAmount = grid.length;
        const listNeighbors = this.checkNeighbors(cell, grid);
        const numberCell = cell.rowNum + cell.colNum * colAmount + 1;

        if (!this.checkIfNodeExistInGraph(graphs.graphNumber, numberCell)) {
            this.addVertices(graphs, cell, colAmount);
        }

        for (let i = 0; i < listNeighbors.length; i++) {
            const neightbor = listNeighbors[i];
            const numberNeighbor = neightbor.rowNum + neightbor.colNum * colAmount + 1;
            if (!this.checkIfNodeExistInGraph(graphs.graphNumber, numberNeighbor)) {
                this.addVertices(graphs, listNeighbors[i], colAmount);
            }
            this.addNodeInAdjacencyList(cell, neightbor, graphs, numberNeighbor, numberCell);
        }
    }
    static addNodeInAdjacencyList(cell: ICell, neightbor: ICell, graphs: Graphs, neightborNum: number, cellNum: number) {
        graphs.graphCells.listNode.get(neightborNum)!.adjacencyList.push(cell);
        graphs.graphCells.listNode.get(neightborNum)!.adjListAmount++;

        graphs.graphCells.listNode.get(cellNum)!.adjacencyList.push(neightbor);
        graphs.graphCells.listNode.get(cellNum)!.adjListAmount++;

        graphs.graphNumber.listNode.get(neightborNum)!.adjacencyList.push(cellNum);
        graphs.graphNumber.listNode.get(neightborNum)!.adjListAmount++;

        graphs.graphNumber.listNode.get(cellNum)!.adjacencyList.push(neightborNum);
        graphs.graphNumber.listNode.get(cellNum)!.adjListAmount++;
    }
    static checkIfNodeExistInGraph(graphNumber: IGraphNumber, numberCell: number) {
        if (graphNumber.listNode.get(numberCell)) {
            return true;
        } else {
            return false;
        }
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
    static addVertices(graphs: Graphs, cell: ICell, colAmount: number) {
        const numberCell = cell.rowNum + cell.colNum * colAmount + 1;

        const nodeNumber: INodeNumber = { adjacencyList: [], distance: 0, num: numberCell, adjListAmount: 0, visitado: false };

        const nodeCell: INodeCell = { adjacencyList: [], adjListAmount: 0, cell: cell, distance: 0, visitado: false };

        graphs.graphCells.listNode.set(numberCell, nodeCell);
        graphs.graphNumber.listNode.set(numberCell, nodeNumber);
    }
}
