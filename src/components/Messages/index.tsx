import { useMessage } from 'hooks/useMessage';
import { Container } from './styles';

export function Messages() {
    const { message } = useMessage();
    return (
        <Container>
            <p>{message}</p>
        </Container>
    );
}
