import { Cell } from 'components/Cell';
import { ICell } from 'interface/ICell';
import { IGraphCells, IGraphNumber } from 'interface/IGraph';
import { INodeCell, INodeNumber } from 'interface/INode';

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
            var innerArrayLenght = grid[xAxis].length;
            for (let yAxis = 0; yAxis < innerArrayLenght; yAxis++) {
                const actualCell = grid[xAxis][yAxis];
                this.AddNodesInGraphsAndMakeAdjList(graphs, actualCell, grid);
            }
        }
    }
    static AddNodesInGraphsAndMakeAdjList(graphs: Graphs, cell: ICell, grid: ICell[][]) {
        const numColumns = grid.length;
        const listNeighbors = this.checkNeighbors(cell, grid);
    }
    static checkIfNodeExisatInGraph() {}
    static checkNeighbors(cell: ICell, grid: ICell[][]): Array<ICell> {
        const listNeighbors: Array<ICell> = [];
        if (!cell.walls[0]) {
            listNeighbors.push(grid[cell.rowNum][cell.rowNum - 1]);
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
    static addVertices(graphNumber: IGraphNumber, graphCells: IGraphCells, cell: ICell, colAmount: number) {
        const numberCell = cell.rowNum + cell.colNum * colAmount + 1;

        const nodeNumber: INodeNumber = { adjacencyList: [], distance: 0, num: numberCell, adjListAmount: 0, visitado: false };
        graphNumber.listNode.set(numberCell, nodeNumber);

        const nodeCell: INodeCell = { adjacencyList: [], adjListAmount: 0, cell: cell, distance: 0, visitado: false };
        graphCells.listNode.set(numberCell, nodeCell);
    }
}
