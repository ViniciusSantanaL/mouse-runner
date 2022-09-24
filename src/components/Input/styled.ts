import styled from 'styled-components';
import * as Label from '@radix-ui/react-label';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

export const StyledLabel = styled.label`
    font-size: 25px;
    font-weight: 500px;
    color: white;
`;

export const StyledInput = styled.div`
    input {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        width: 100%;
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
