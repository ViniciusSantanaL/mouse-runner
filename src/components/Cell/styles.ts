import styled, { css } from 'styled-components';

interface StyledCellProps {
    top: boolean;
    right: boolean;
    bottom: boolean;
    left: boolean;
    visited: boolean;
}

export const StyledCell = styled.div<StyledCellProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    width: 70px;
    height: 70px;
    padding: 1px;

    ${(props) =>
        !!props.visited &&
        css`
            background-color: purple;
        `}

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
        !!props.bottom == true &&
        css`
            border-bottom: 1px solid white;
            padding-bottom: 0;
        `}

    
        ${(props) =>
        !!props.left == true &&
        css`
            border-left: 1px solid white;
            padding-left: 0;
        `}
`;
