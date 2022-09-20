import Button from 'components/Button';
import Maze from 'components/Maze';
import { useRoutes } from 'react-router-dom';
import MouseAnimation from './components/MouseAnimation';

import { ButtonGroup, Container } from './styles';

export default function Home() {
    const router = useRoutes;
    return (
        <Container>
            <MouseAnimation />
            <ButtonGroup>
                <Button>START</Button>
                <Button>TUTORIAL</Button>
                <Button>REFERENCE</Button>
            </ButtonGroup>
        </Container>
    );
}
