import { Maze } from './components/IntialMaze';
import { Title } from './components/Title';
import './index.css';

export function App() {
    return (
        <main className="container">
            <Title />
            <Maze />
        </main>
    );
}
