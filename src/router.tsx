import Maze from 'components/Maze';
import { Title } from 'components/Title';
import Home from 'pages/Home';
import Tutorial from 'pages/Tutorial';
import StepOne from 'pages/Tutorial/StepOne';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
    return (
        <main className="container">
            <Router>
                <Title />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="maze" element={<Maze />} />
                    <Route path="tutorial" element={<Tutorial />}></Route>
                </Routes>
            </Router>
        </main>
    );
}
