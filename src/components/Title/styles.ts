import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
`;

export const StyledTitle = styled.div`
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8080ff;
    border-radius: 20px;
    width: 800px;
    box-shadow: 0px 2px 2px #fff;
    gap: 2rem;

    h1 {
        border-radius: 60px;
        font-size: 80px;
        letter-spacing: 10px;
        padding: 5px;
        color: #fff;
        text-shadow: 0px 2px 2px blue;
    }
    img {
        width: 140px;
    }
`;
