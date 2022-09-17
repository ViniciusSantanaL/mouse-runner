import { ICell } from 'interface/ICell';

export abstract class CellFactory {
    show(): number {
        return 1;
    }

    static setup(row: number, col: number): ICell {
        const cell: ICell = { rowNum: row, colNum: col, walls: [true, true, true, true], visited: false, current: false };

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

    static removeWalls(current: ICell, neighbor: ICell, grid: Array<Array<ICell>>): Array<Array<ICell>> {
        const x = current.rowNum - neighbor.rowNum;
        if (x === 1) {
            current.walls[3] = false;
            neighbor.walls[1] = false;
        }
        if (x === -1) {
            current.walls[1] = false;
            neighbor.walls[3] = false;
        }
        const y = current.colNum - neighbor.colNum;
        if (y === 1) {
            current.walls[0] = false;
            neighbor.walls[2] = false;
        }
        if (y === -1) {
            current.walls[2] = false;
            neighbor.walls[0] = false;
        }
        grid[current.rowNum][current.colNum] = current;
        grid[neighbor.rowNum][neighbor.colNum] = neighbor;

        return grid;
    }
}
