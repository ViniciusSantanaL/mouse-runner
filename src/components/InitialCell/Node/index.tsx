import { StyledNode } from './styles';

export default function Node(props: { children: React.ReactNode }) {
    return <StyledNode>{props.children}</StyledNode>;
}
