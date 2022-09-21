import { ICell } from 'interface/ICell';
import { IMaze } from 'interface/IMaze';
import { CellService } from './CellService';

export abstract class MazeService {
    static setup(width: number): IMaze {
        const maze: IMaze = { colums: 0, rows: 0, grid: [], witdhCell: 0, current: CellService.setup(0, 0), stack: [], width: 0 };

        maze.witdhCell = width / 10;
        maze.rows = Math.floor(width / maze.witdhCell);
        maze.colums = Math.floor(width / maze.witdhCell);
        maze.witdhCell = width / 10;

        for (let r = 0; r < maze.rows; r++) {
            const row: Array<ICell> = [];
            for (let c = 0; c < maze.colums; c++) {
                const cell = CellService.setup(r, c);
                row.push(cell);
            }
            maze.grid.push(row);
        }
        maze.current = maze.grid[4][4];
        maze.current.current = true;
        maze.current.visited = true;

        return maze;
    }
    static updateMaze(maze: IMaze, width?: number, rows?: number, columns?: number): IMaze {
        if (!!width && !!rows && !!columns) {
            maze.colums = columns;
            maze.rows = rows;
            maze.width = width;
            maze.witdhCell = Math.floor(width / columns);
            return maze;
        }

        if (!!width && rows == undefined && columns == undefined) {
            maze.witdhCell = width / 10;
            maze.width = width;
            maze.rows = Math.floor(width / maze.witdhCell);
            maze.colums = Math.floor(width / maze.witdhCell);

            return maze;
        }
        return maze;
    }
}
