import styled from 'styled-components';

export const Container = styled.div`
    width: 400px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    text-align: center;
    p {
        font-size: 4rem;
        color: #fff;
        letter-spacing: 1rem;
    }
    h2 {
        letter-spacing: 1rem;
        font-size: 4rem;
        color: white;
        font-weight: 600;
    }
    button {
        width: 120px;
    }
    div {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }
`;
