import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    margin: 0 auto;
    width: 1400px;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    @media (max-width: 1024px) {
        gap: 1rem;
    }
`;

export const Content = styled.div``;

export const ContentInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 500px;
    align-items: center;
`;
export const ButtomGroup = styled.div`
    display: grid;
    width: 450px;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 2rem;

    @media (max-width: 1024px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-left: 1.5rem;
    }
    gap: 1.7rem;
    button {
        width: 150px;
        @media (max-width: 1024px) {
            width: 338px;
        }
    }
`;
