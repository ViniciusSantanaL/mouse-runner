import { useState } from 'react';
import { InitialMaze } from 'components/IntialMaze';
import { Timer } from 'components/Timer';
import { LoadingProvider } from 'hooks/useLoading';
import { useMessage } from 'hooks/useMessage';
import { Container } from './styles';
import { IMaze } from 'interface/IMaze';
import { Messages } from 'components/Messages';
import { Maze } from 'components/Maze';
import { FinalMaze } from 'components/FinalMaze';
import Button from 'components/Button';
import { IGraph } from 'interface/IGraph';
import { Graph } from 'components/Graph';
import { Table } from 'components/Table';

export function Game() {
    const [maze, setMaze] = useState<IMaze | null>(null);

    const [restartMaze, setRestartMaze] = useState(false);
    const [startOrReset, setStartOrReset] = useState(false);

    const [graphMouse, setGraphMouse] = useState<IGraph | null>(null);

    const [mazeGraph, setMazeGraph] = useState<IMaze | null>(null);

    const { message } = useMessage();
    
    
    return (
        <LoadingProvider>
            <Container>
                <Timer startOrReset={startOrReset} setStartOrReset={setStartOrReset} />
                <div className="container-maze">
                    {startOrReset ? (
                        <Maze maze={maze as IMaze} graphMouse={graphMouse} setGraphMouse={setGraphMouse} restartMaze={restartMaze} setRestartMaze={setRestartMaze} setMazeGraph={setMazeGraph} />
                    ) : (
                        <InitialMaze maze={maze} setMaze={setMaze} />
                    )}
                </div>
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
            {startOrReset && <Graph maze={mazeGraph} />}
            {startOrReset && <Container><Table title='Mouse Runner Results'/></Container>}
            {startOrReset && (
                <Container>
                    <div className="container-message">
                        <Messages message={'A* Search Algorithm'} />
                    </div>
                    <div className="container-maze">
                        <FinalMaze maze={maze} />
                    </div>
                    <div className="container-message">
                        <Messages message={'Calculate the fast path in Maze'} />
                    </div>
                </Container>
            )}
        </LoadingProvider>
    );
}
