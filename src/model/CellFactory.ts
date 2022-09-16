import { ICell } from 'interface/ICell';

export abstract class CellFactory {
    show(): number {
        return 1;
    }

    static setup(): ICell {
        const cell: ICell = { rowNum: 0, colNum: 10, walls: [true, true, true, true] };
        const num = Math.floor(Math.random() * 3);
        cell.walls[num] = false;
        return cell;
    }
}
