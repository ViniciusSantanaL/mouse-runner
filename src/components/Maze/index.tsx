import { Maze } from 'interface/Maze';
import { MazeFactory } from 'model/MazeFactory';
import { useState } from 'react';

import './Maze.scss';
function Maze(): JSX.Element {
    const [maze] = useState<Maze>(MazeFactory.setup(800, 800, 80));

    return (
        <section className="container-maze">
            <div className="maze">
                {maze.grid.map((row, index) => (
                    <div key={index}>
                        {row.map((col, index) => (
                            <span key={index}>{1}</span>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Maze;
