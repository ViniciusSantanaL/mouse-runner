import { Title } from 'components/Title';
import Home from 'pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
    return (
        <main className="container">
            <Router>
                <Title />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </main>
    );
}
