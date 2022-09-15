import Cell from 'components/Cell';
import { IMaze } from 'interface/IMaze';
import { MazeFactory } from 'model/MazeFactory';
import { useState } from 'react';

import './Maze.scss';
function Maze() {
    const [maze] = useState<IMaze>(MazeFactory.setup(700, 700, 70));

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
