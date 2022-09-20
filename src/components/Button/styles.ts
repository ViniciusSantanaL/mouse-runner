import styled from 'styled-components';

export const StyledButton = styled.div`
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
    }
    button:hover {
        background-color: #fff;
        color: #4682b4;
        box-shadow: 0px 2px 5px #fff;
        transform: translateY(-7px);
    }
`;
