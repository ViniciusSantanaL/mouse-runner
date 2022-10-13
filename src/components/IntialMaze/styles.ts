import styled, { keyframes } from 'styled-components';

export const Container = styled.section`
    width: 850px;
    height: 850px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const animationMaze = keyframes`
    0% { opacity: 0; }
    20% { opacity: 0.2; }
    40% { opacity: 0.5; }
    60% { opacity: 0.7; }
    80% { opacity: 0.9; }
    100% { opacity: 1; }

`;

export const StyledMaze = styled.div`
    background-color: black;
    animation-name: ${animationMaze};
    animation-duration: 1s;
    width: 840px;
    height: 840px;
    border: 5px solid #ffffff;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    h1 {
        color: white;
        font-size: 5px;
    }
`;

export const Cell = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    width: 10px;
    height: 10px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    border-left: 1px solid white;
    border-right: 1px solid white;
`;
