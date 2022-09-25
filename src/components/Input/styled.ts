import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledLabel = styled.label`
    font-size: 25px;
    color: white;
`;

export const StyledInput = styled.div`
    input {
        border-radius: 4px;

        text-align: center;
        font-size: 25px;
        line-height: 1px;
        color: black;
        padding: 10px;
        background-color: white;
        box-shadow: 0 0 0 1px #668cff;
        &:focus {
            box-shadow: 0 0 0 2px #668cff;
        }
    }
`;
