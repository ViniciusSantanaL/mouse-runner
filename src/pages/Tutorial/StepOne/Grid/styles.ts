import styled, { keyframes } from 'styled-components';

export const ContainerGrid = styled.section``;

export const animationMaze = keyframes`
    0% { opacity: 0; }
    20% { opacity: 0.2; }
    40% { opacity: 0.5; }
    60% { opacity: 0.7; }
    80% { opacity: 0.9; }
    100% { opacity: 1; }

`;

export const StyledMaze = styled.div<{ width: number }>`
    background-color: black;
    animation-name: ${animationMaze};
    animation-duration: 1s;
    width: ${(props) => `${props.width}px`};
    height: ${(props) => `${props.width}px`};
    border: 5px solid #ffffff;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    h1 {
        color: white;
        font-size: 5px;
    }
`;
