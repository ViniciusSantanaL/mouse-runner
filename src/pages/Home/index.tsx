import Button from 'components/Button';
import { Title } from 'components/Title';
import { useNavigate } from 'react-router-dom';
import MouseAnimation from './components/MouseAnimation';
import { ButtonGroup, Container } from './styles';

export default function Home() {
    const navigate = useNavigate();
    return (
        <>
            <Title />
            <Container>
                <MouseAnimation />
                <ButtonGroup>
                    <Button onClick={() => navigate('/maze')}>START</Button>
                    <Button onClick={() => navigate('/tutorial')}>TUTORIAL</Button>
                    <Button onClick={() => window.location.assign('https://github.com/ViniciusSantanaL/mouse-runner')}>REFERENCE</Button>
                </ButtonGroup>
            </Container>
        </>
    );
}
