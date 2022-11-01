import { useMessage } from 'hooks/useMessage';
import { Container } from './styles';

interface MessageProps {
    message: string;
}
export function Messages({ message }: MessageProps) {
    return (
        <Container>
            <p>{message}</p>
        </Container>
    );
}
