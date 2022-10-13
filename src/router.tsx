import { Game } from 'pages/Game';
import Home from 'pages/Home';
import Tutorial from 'pages/Tutorial';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
    return (
        <main className="container">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="maze" element={<Game />} />
                    <Route path="tutorial" element={<Tutorial />}></Route>
                </Routes>
            </Router>
        </main>
    );
}
