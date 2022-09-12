import { Maze } from './components/Maze'
import { Title } from './components/Title'
import './index.css'
export function App() {
    return (
        <main className="container">
            <Title />
            <Maze />
        </main>
    )
}
