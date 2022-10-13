import { useState } from 'react';
import { InitialMaze } from 'components/IntialMaze';
import { Timer } from 'components/Timer';
import { LoadingProvider } from 'hooks/useLoading';
import { MessageProvider } from 'hooks/useMessage';
import { Container } from './styles';
import { IMaze } from 'interface/IMaze';
import { Messages } from 'components/Messages';
import { Maze } from 'components/Maze';

export function Game() {
    const [maze, setMaze] = useState<IMaze | null>(null);
    const [startOrReset, setStartOrReset] = useState(false);

    return (
        <LoadingProvider>
            <MessageProvider>
                <Container>
                    <Timer startOrReset={startOrReset} setStartOrReset={setStartOrReset} />
                    <div className="container-maze">{startOrReset ? <Maze maze={maze} setMaze={setMaze} /> : <InitialMaze maze={maze} setMaze={setMaze} />}</div>
                    <Messages />
                </Container>
            </MessageProvider>
        </LoadingProvider>
    );
}
