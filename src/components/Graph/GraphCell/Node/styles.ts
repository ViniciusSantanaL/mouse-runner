import styled from 'styled-components';

interface StyledNodeProps {
    current: boolean;
    initial: boolean;
    final: boolean;
}

function handleColorCell(cell: StyledNodeProps) {
    if (cell.initial) {
        return 'green';
    } else if (cell.final) {
        return 'red';
    }  else {
        return 'purple';
    }
}

export const StyledGraphNode = styled.span<StyledNodeProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => handleColorCell(props)};
    width: 60%;
    height: 60%;
    border: 1px white solid;
    border-radius: 100%;
    font-size: 0.8rem;
`;
