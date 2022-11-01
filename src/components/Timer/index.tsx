import Button from 'components/Button';
import { Container } from './styles';
import React, { useEffect } from 'react';
import { useMessage } from 'hooks/useMessage';

interface TimerProps {
    startOrReset: boolean;
    setStartOrReset: React.Dispatch<React.SetStateAction<boolean>>;
    time: number;
    setTime: React.Dispatch<React.SetStateAction<number>>;
}
export function Timer({ startOrReset, setStartOrReset, time, setTime }: TimerProps) {
    const minutesToDisplay = Math.floor(time / 60);
    const secondsToDisplay = time % 60;

    const { message } = useMessage();
    const isReady = message == 'All Right, Click in button to Start';

    function startTimer() {
        if (startOrReset) {
            setTimeout(() => {
                setTime(time + 1);
            }, 1000);
        } else if (time !== 0) {
            setTime(0);
        }
    }
    useEffect(() => {
        startTimer();
    }, [time, startOrReset]);

    return (
        <Container>
            <h2>TIMER</h2>
            <p>
                {minutesToDisplay.toString().padStart(2, '0')}:{secondsToDisplay.toString().padStart(2, '0')}
            </p>
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
