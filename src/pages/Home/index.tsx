import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
import MouseAnimation from './components/MouseAnimation';
import { ButtonGroup, Container } from './styles';

export default function Home() {
    const navigate = useNavigate();
    return (
        <Container>
            <MouseAnimation />
            <ButtonGroup>
                <Button onClick={() => navigate('/maze')}>START</Button>
                <Button>TUTORIAL</Button>
                <Button>REFERENCE</Button>
            </ButtonGroup>
        </Container>
    );
}
