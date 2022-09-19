import { StyledNode, StyledNodeArrow, StyledNodeLine, Teste } from './styles';

export default function Node(props: { children: React.ReactNode }) {
    return (
        <>
            <StyledNode>{props.children}</StyledNode>
            <StyledNodeLine></StyledNodeLine>
        </>
    );
}
