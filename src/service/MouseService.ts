import { ICell } from 'interface/ICell';

export abstract class MouseService {
    static checkNeighbors(cell: ICell, grid: ICell[][]): Array<ICell> {
        const listNeighbors: Array<ICell> = [];
        if (!cell.walls[0]) {
            const top = grid[cell.rowNum][cell.colNum - 1];
            if (!top.visitedMouse) listNeighbors.push(top);
        }
        if (!cell.walls[1]) {
            const right = grid[cell.rowNum + 1][cell.colNum];
            if (!right.visitedMouse) listNeighbors.push(right);
        }
        if (!cell.walls[2]) {
            const bottom = grid[cell.rowNum][cell.colNum + 1];
            if (!bottom.visitedMouse) listNeighbors.push(bottom);
        }
        if (!cell.walls[3]) {
            const left = grid[cell.rowNum - 1][cell.colNum];
            if (!left.visitedMouse) listNeighbors.push(left);
        }
        return listNeighbors;
    }

    static chooseNeighboor(neighbors: ICell[]): ICell | undefined {
        if (neighbors.length > 0) {
            const sortedIndex = Math.floor(Math.random() * neighbors.length);
            return neighbors[sortedIndex];
        } else {
            return undefined;
        }
    }
}
