export class Cell {
    private rowNum: number;
    private colNum: number;

    constructor(rowNum: number, colNum: number) {
        this.rowNum = rowNum;
        this.colNum = colNum;
    }

    show(sizeCell: number) {
        var x = this.rowNum * sizeCell;
        var y = this.colNum * sizeCell;
    }
}
