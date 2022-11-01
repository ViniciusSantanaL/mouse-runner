import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;

    .container-maze {
        width: 60%;
        display: flex;
        justify-content: center;
    }

    .container-message {
        button {
            font-size: 1rem;
            margin-top: 1rem;
        }
    }
`;
