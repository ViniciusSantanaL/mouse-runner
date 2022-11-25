import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .container-maze {
        width: 60%;
        display: flex;
        justify-content: center;
    }

    .container-message {
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        button {
            font-size: 1rem;
            margin-top: 1rem;
        }
    }
`;
