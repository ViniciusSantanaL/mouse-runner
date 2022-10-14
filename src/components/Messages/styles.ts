import styled from 'styled-components';

export const Container = styled.section`
    width: 400px;
    margin-right: 2rem;

    @media (max-width: 1300px) {
        width: 200px;
    }

    p {
        color: #fff;
        font-size: 2rem;
        text-align: center;
    }
`;
