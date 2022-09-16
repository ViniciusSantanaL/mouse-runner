import Cell from 'components/Cell';
import { IMaze } from 'interface/IMaze';
import { CellFactory } from 'model/CellFactory';
import { MazeFactory } from 'model/MazeFactory';
import { useEffect, useState } from 'react';

import './Maze.scss';
function Maze() {
    const [maze, setMaze] = useState<IMaze>(MazeFactory.setup(700, 700, 70));
    useEffect(() => {
        let currentUpdate = maze.current;
        if (currentUpdate) {
            currentUpdate.visited = true;
            const next = CellFactory.checkNeighbors(currentUpdate, maze.grid, maze.rows, maze.colums);
            if (next) {
                next.visited = true;
                currentUpdate = next;
                setMaze({ ...maze, current: currentUpdate });
            }
        }
    }, [maze]);
    return (
        <section className="container-maze">
            <div className="maze">
                {maze.grid.map((row, index) => (
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
