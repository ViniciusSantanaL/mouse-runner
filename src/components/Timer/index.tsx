import Button from 'components/Button';
import { Container } from './styles';
import React from 'react';
import { useMessage } from 'hooks/useMessage';

interface TimerProps {
    startOrReset: boolean;
    setStartOrReset: React.Dispatch<React.SetStateAction<boolean>>;
}
export function Timer({ startOrReset, setStartOrReset}: TimerProps) {

    const { message } = useMessage();
    const isReady = message == 'All Right, Click in button to Start';

    return (
        <Container>
            <h2>{startOrReset ? 'Make another Maze?': `Let's to Play!`}</h2>
            <div>
                <Button color="green" disable={!isReady || startOrReset} onClick={() => setStartOrReset(true)}>
                    Start
                </Button>
                <Button color="red" disable={!isReady || !startOrReset} onClick={() => setStartOrReset(false)}>
                    Reset
                </Button>
            </div>
        </Container>
    );
}
