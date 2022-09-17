import Cell from 'components/Cell';
import { IMaze } from 'interface/IMaze';
import { CellFactory } from 'model/CellFactory';
import { MazeFactory } from 'model/MazeFactory';
import { useEffect, useState } from 'react';

import './Maze.scss';
function Maze() {
    const [maze, setMaze] = useState<IMaze | null>(null);

    useEffect(() => {
        setMaze(MazeFactory.setup(700, 700, 70));
    }, []);

    useEffect(() => {
        if (maze) {
            let currentUpdate = maze.current;

            const next = CellFactory.checkNeighbors(currentUpdate, maze.grid, maze.rows, maze.colums);
            if (next) {
                next.visited = true;
                next.current = true;
                currentUpdate.current = false;
                const gridUpdate = CellFactory.removeWalls(currentUpdate, next, maze.grid);

                currentUpdate = next;
                setMaze({ ...maze, grid: gridUpdate, current: currentUpdate });
            }
        }
    }, [maze]);
    return (
        <section className="container-maze">
            <div className="maze">
                {maze &&
                    maze.grid.map((row, index) => (
                        <div key={index}>
                            {row.map((cell, index) => (
                                <Cell key={index} cell={cell} />
                            ))}
                        </div>
                    ))}
            </div>
        </section>
    );
}

export default Maze;
