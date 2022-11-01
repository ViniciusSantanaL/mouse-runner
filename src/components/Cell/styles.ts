import styled, { css } from 'styled-components';

interface StyledCellProps {
    top: boolean;
    right: boolean;
    bottom: boolean;
    left: boolean;
    visitedMouse: boolean;
    current: boolean;
    widthCell: number;
    initial: boolean;
    final: boolean;
}

function handleColorCell(cell: StyledCellProps) {
    if (cell.initial) {
        return 'green';
    } else if (cell.final) {
        return 'red';
    } else if (cell.visitedMouse) {
        return 'orange';
    } else {
        return '#0b0b33';
    }
}

export const StyledCell = styled.div<StyledCellProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    width: ${(props) => `${props.widthCell}px`};
    height: ${(props) => `${props.widthCell}px`};
    padding: 1px;
    background-color: ${(props) => handleColorCell(props)};
    ${(props) =>
        !!props.top &&
        css`
            border-top: 1px solid white;
            padding-top: 0;
        `}

    ${(props) =>
        !!props.right &&
        css`
            border-right: 1px solid white;
            padding-right: 0;
        `}

    
        ${(props) =>
        !!props.bottom &&
        css`
            border-bottom: 1px solid white;
            padding-bottom: 0;
        `}

    
        ${(props) =>
        !!props.left &&
        css`
            border-left: 1px solid white;
            padding-left: 0;
        `}

        img {
        width: 30px;
        height: 30px;
        @media (max-width: 1300px) {
            width: 20px;
            height: 20px;
        }
    }
`;
