import { useState } from 'react';
import { InitialMaze } from 'components/IntialMaze';
import { Timer } from 'components/Timer';
import { LoadingProvider } from 'hooks/useLoading';
import { MessageProvider, useMessage } from 'hooks/useMessage';
import { Container } from './styles';
import { IMaze } from 'interface/IMaze';
import { Messages } from 'components/Messages';
import { Maze } from 'components/Maze';
import { FinalMaze } from 'components/FinalMaze';
import Button from 'components/Button';

export function Game() {
    const [maze, setMaze] = useState<IMaze | null>(null);
    const [restartMaze, setRestartMaze] = useState(false);
    const [startOrReset, setStartOrReset] = useState(false);
    const [time, setTime] = useState(0);
    const { message } = useMessage();

    return (
        <LoadingProvider>
            <Container>
                <Timer startOrReset={startOrReset} setStartOrReset={setStartOrReset} setTime={setTime} time={time} />
                <div className="container-maze">{startOrReset ? <Maze maze={maze} restartMaze={restartMaze} setRestartMaze={setRestartMaze} /> : <InitialMaze maze={maze} setMaze={setMaze} />}</div>
                <div className="container-message">
                    <Messages message={message} />
                    {startOrReset && (
                        <Button
                            color="yellow"
                            onClick={() => {
                                setRestartMaze(true);
                            }}
                        >
                            Let&apos;s Try Again
                        </Button>
                    )}
                </div>
            </Container>
            {startOrReset && (
                <Container>
                    <Messages message={'A* Search Algorithm'} />
                    <div className="container-maze">
                        <FinalMaze maze={maze} />
                    </div>
                    <Messages message={'Calculate the fast path in Maze'} />
                </Container>
            )}
        </LoadingProvider>
    );
}
