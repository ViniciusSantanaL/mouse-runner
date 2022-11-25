import { MessageProvider } from 'hooks/useMessage';
import { TimeProvider } from 'hooks/useTime';
import { Game } from 'pages/Game';
import Home from 'pages/Home';
import Tutorial from 'pages/Tutorial';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
    return (
        <main className="container">
            <Router>
                <TimeProvider>
                    <MessageProvider>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="maze" element={<Game />} />
                            <Route path="tutorial" element={<Tutorial />}></Route>
                        </Routes>
                    </MessageProvider>
                </TimeProvider>
            </Router>
        </main>
    );
}
