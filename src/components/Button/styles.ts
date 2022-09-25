import styled, { css } from 'styled-components';

type StyledInputProps = {
    color?: 'red' | 'yellow' | 'green';
    selected?: boolean;
};

export const StyledButton = styled.div<StyledInputProps>`
    button {
        background-color: #4682b4;
        color: white;
        letter-spacing: 5px;
        width: 200px;
        font-weight: 500;
        box-shadow: 0px 2px 5px blue;
        padding: 20px;
        font-size: 20px;
        border-radius: 20px;
        border: none;
        font-weight: bold;

        font-family: 'Poppins', sans-serif;
        transition: all 0.3s ease 0s;

        ${(props) =>
            props.color === 'red' &&
            css`
                background-color: #ff3333;
                box-shadow: 0px 2px 5px #ff3333;
            `}
        ${(props) =>
            props.color === 'yellow' &&
            css`
                background-color: #e6e600;
                box-shadow: 0px 2px 5px #e6e600;
            `}
            ${(props) =>
            props.color === 'green' &&
            css`
                background-color: #00e600;
                box-shadow: 0px 2px 5px #00e600;
            `}
            ${(props) =>
            props.selected === true &&
            css`
                background-color: #fff;
                color: #4682b4;
                box-shadow: 0px 2px 5px #fff;
            `}
    }
    button:hover {
        background-color: #fff;
        color: #4682b4;
        box-shadow: 0px 2px 5px #fff;
        transform: translateY(-7px);
    }
`;
