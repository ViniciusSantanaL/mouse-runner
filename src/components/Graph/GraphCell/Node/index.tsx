import { StyledGraphNode } from "./styles";


export default function GraphNode(props: { initial:boolean,final:boolean,current:boolean,children?: number}) {
    return (
    <StyledGraphNode initial={props.initial} final={props.final} current={props.current}>
        {props.children}
    </StyledGraphNode>);
}
