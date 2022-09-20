import styled from 'styled-components';

export const StyledNode = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
    width: 40px;
    height: 40px;
    border: 1px blue solid;
    border-radius: 40px;
`;

export const StyledNodeLine = styled.span`
    height: 2px;
    width: 32px;
    background-color: white;
    display: inline-block;
    display: none;
`;

export const StyledNodeArrow = styled.span`
    border: solid white;
    border-width: 0 2px 2px 0;
    padding: 2px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
`;

export const Teste = styled.span`
    border: solid white;
    border-width: 0 2px 2px 0;
    padding: 2px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
`;
