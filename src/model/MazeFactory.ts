import { Cell } from 'interface/Cell';
import { Maze } from 'interface/Maze';
import { CellFactory } from './CellFactory';

export abstract class MazeFactory {
    static setup(height: number, width: number, widthCell: number): Maze {
        const maze: Maze = { colums: 0, rows: 0, grid: [], witdhCell: widthCell };
        maze.rows = Math.floor(height / widthCell);
        maze.colums = Math.floor(width / widthCell);

        for (let r = 0; r < maze.rows; r++) {
            let row: Array<Cell> = [];
            for (let c = 0; c < maze.colums; c++) {
                let cell = CellFactory.setup();
                row.push(cell);
            }
            maze.grid.push(row);
        }
        return maze;
    }
}
