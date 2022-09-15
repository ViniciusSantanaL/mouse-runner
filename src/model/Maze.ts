import internal from 'stream';

export class Maze {
    private widthCell: number;
    private rows: number;
    private columns: number;

    constructor(height: number, width: number, widthCell: number) {
        this.widthCell = widthCell;
        this.rows = Math.floor(height / widthCell);
        this.columns = Math.floor(width / widthCell);
    }
}
