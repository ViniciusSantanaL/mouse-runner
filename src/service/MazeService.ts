import { ICell } from 'interface/ICell';
import { IMaze } from 'interface/IMaze';
import { CellService } from './CellService';

export abstract class MazeService {
    static setup(width: number, rows: number, columns: number): IMaze {
        const maze: IMaze = { colums: 0, rows: 0, grid: [], witdhCell: 0, current: {} as ICell, stack: [], width: 0, initial: undefined, final: undefined };
        maze.colums = columns;
        maze.rows = rows;
        maze.witdhCell = Math.floor(width / columns);
        maze.width = Math.floor(Number(width) + Number(columns) * 2);

        for (let r = 0; r < maze.rows; r++) {
            const row: Array<ICell> = [];
            for (let c = 0; c < maze.colums; c++) {
                const cell = CellService.setup(r, c, maze.colums);
                row.push(cell);
            }
            maze.grid.push(row);
        }
        maze.current = maze.grid[4][4];
        maze.current.current = true;
        maze.current.visited = true;

        return maze;
    }
    static updateMaze(maze: IMaze, width: number, rows: number, columns: number): IMaze {
        maze.colums = columns;
        maze.rows = rows;
        maze.width = Math.floor(Number(width) + Number(columns) * 2);
        maze.witdhCell = Math.floor(width / columns);
        maze.grid = [];
        for (let r = 0; r < maze.rows; r++) {
            const row: Array<ICell> = [];
            for (let c = 0; c < maze.colums; c++) {
                const cell = CellService.setup(r, c, maze.colums);
                row.push(cell);
            }
            maze.grid.push(row);
        }
        return maze;
    }
}
