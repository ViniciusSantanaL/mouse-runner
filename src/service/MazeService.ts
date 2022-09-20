import { ICell } from 'interface/ICell';
import { IMaze } from 'interface/IMaze';
import { CellService } from './CellService';

export abstract class MazeService {
    static setup(height?: number, width: number, widthCell: number): IMaze {
        const maze: IMaze = { colums: 0, rows: 0, grid: [], witdhCell: widthCell, current: CellService.setup(0, 0), stack: [] };
        maze.rows = Math.floor(height / widthCell);
        maze.colums = Math.floor(width / widthCell);

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
    private startValuesMaze(width: number, height: number) {}
}
