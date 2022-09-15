import { Cell } from 'interface/Cell';

export abstract class CellFactory {
    show(): number {
        return 1;
    }

    static setup(): Cell {
        const cell: Cell = { rowNum: 0, colNum: 10 };
        return cell;
    }
}
