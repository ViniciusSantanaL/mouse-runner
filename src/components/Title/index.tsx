import { Container, StyledTitle } from './styles';

export function Title() {
    return (
        <Container>
            <StyledTitle>
                <h1>Mouse Runner</h1>
                <img src={require('assets/Home/mouse-title.png')} />
            </StyledTitle>
        </Container>
    );
}
