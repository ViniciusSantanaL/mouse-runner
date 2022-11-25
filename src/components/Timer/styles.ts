import styled from 'styled-components';

export const Container = styled.div`
    width: 400px;
    @media (max-width: 1300px) {
        width: 200px;
        margin: 0 1rem;
    }
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    text-align: center;
    h2 {
        letter-spacing: 0.25rem;
        font-size: 2rem;
        color: white;
        font-weight: 600;
        
    }
    button {
        width: 120px;
        @media (max-width: 1300px) {
            width: 100px;
            font-size: 1rem;
        }
    }
    div {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }
`;
