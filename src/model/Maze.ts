import internal from 'stream';
import { Cell } from './Cell';

export class Maze {
    private widthCell: number;
    private rows: number;
    private columns: number;
    private grid: Array<Array<Cell>> = [];

    constructor(height: number, width: number, widthCell: number) {
        this.widthCell = widthCell;
        this.rows = Math.floor(height / widthCell);
        this.columns = Math.floor(width / widthCell);
    }

    setup(): void {
        for (let r = 0; r < this.rows; r++) {
            let row: Array<Cell> = [];
            for (let c = 0; c < this.columns; c++) {
                let cell = new Cell(r, c);
                row.push(cell);
            }
            this.grid.push(row);
        }
    }

    draw() {
        for (let r = 0; r < this.grid.length; r++) {
            for (let c = 0; c < this.columns; c++) {}
        }
    }
}
