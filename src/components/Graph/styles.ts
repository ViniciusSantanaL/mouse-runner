import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .container-maze {
        width: 800px;
        height: 800px;
        display: flex;
        justify-content: center;
    }
`;

type ContainerProps = {
    width: number;
};

export const ContainerMaze = styled.section<ContainerProps>`
    width: ${(props) => `${props.width + 10}px`};
    height: ${(props) => `${props.width + 10}px`};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledGraph = styled.div<ContainerProps>`
    width: ${(props) => `${props.width}px`};
    height: ${(props) => `${props.width}px`};
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    h1 {
        color: white;
        font-size: 5px;
    }
`
type EmpytDivProp  = {
    widthCell: number
}
export const EmptyDiv = styled.div<EmpytDivProp>`
    width: ${(props) => `${props.widthCell}px`};
    height: ${(props) => `${props.widthCell}px`};
`