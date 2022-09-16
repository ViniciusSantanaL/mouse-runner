import { ICell } from 'interface/ICell';

export abstract class CellFactory {
    show(): number {
        return 1;
    }

    static setup(row: number, col: number): ICell {
        const cell: ICell = { rowNum: row, colNum: col, walls: [true, true, true, true], visited: false };

        return cell;
    }

    static checkNeighbors(cell: ICell, grid: Array<Array<ICell>>, rowCount: number, colCount: number): ICell | undefined {
        const neighbors = [];

        const top = this.checkIndexIsValid(cell.rowNum, cell.colNum - 1, rowCount, colCount) ? grid[cell.rowNum][cell.colNum - 1] : undefined;
        const right = this.checkIndexIsValid(cell.rowNum + 1, cell.colNum, rowCount, colCount) ? grid[cell.rowNum + 1][cell.colNum] : undefined;
        const bottom = this.checkIndexIsValid(cell.rowNum, cell.colNum + 1, rowCount, colCount) ? grid[cell.rowNum][cell.colNum + 1] : undefined;
        const left = this.checkIndexIsValid(cell.rowNum - 1, cell.colNum, rowCount, colCount) ? grid[cell.rowNum - 1][cell.colNum] : undefined;

        if (top && !top.visited) {
            neighbors.push(top);
        }
        if (right && !right.visited) {
            neighbors.push(right);
        }
        if (bottom && !bottom.visited) {
            neighbors.push(bottom);
        }
        if (left && !left.visited) {
            neighbors.push(left);
        }

        if (neighbors.length > 0) {
            const sortedIndex = Math.floor(Math.random() * neighbors.length);
            return neighbors[sortedIndex];
        } else {
            return undefined;
        }
    }
    static checkIndexIsValid(x: number, j: number, rowCount: number, colCount: number): boolean {
        if (x < 0 || j < 0 || x > colCount - 1 || j > rowCount - 1) return false;
        else return true;
    }
}
