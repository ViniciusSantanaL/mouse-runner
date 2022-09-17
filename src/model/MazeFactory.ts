import { ICell } from 'interface/ICell';
import { IMaze } from 'interface/IMaze';
import { CellFactory } from './CellFactory';

export abstract class MazeFactory {
    static setup(height: number, width: number, widthCell: number): IMaze {
        const maze: IMaze = { colums: 0, rows: 0, grid: [], witdhCell: widthCell, current: CellFactory.setup(0, 0) };
        maze.rows = Math.floor(height / widthCell);
        maze.colums = Math.floor(width / widthCell);

        for (let r = 0; r < maze.rows; r++) {
            const row: Array<ICell> = [];
            for (let c = 0; c < maze.colums; c++) {
                const cell = CellFactory.setup(r, c);
                row.push(cell);
            }
            maze.grid.push(row);
        }
        maze.current = maze.grid[4][4];
        maze.current.current = true;
        maze.current.visited = true;

        return maze;
    }
}
