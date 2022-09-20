import { Cheese, Container, Mouse } from './styles';

export default function MouseAnimation() {
    return (
        <Container>
            <Cheese src={require('assets/Home/cheese.png')} />
            <Mouse src={require('assets/Home/mouse.png')} />
            <Cheese src={require('assets/Home/cheese.png')} />
            <Cheese src={require('assets/Home/cheese.png')} />
        </Container>
    );
}
