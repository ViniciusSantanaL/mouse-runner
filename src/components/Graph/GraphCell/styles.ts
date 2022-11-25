import styled from 'styled-components';

interface StyledGraphCellProps {
    widthCell: number;
}

export const StyledGraphCell = styled.div<StyledGraphCellProps>`
    display: flex;
    flex-direction: column;
    color: white;
    width: ${(props) => `${props.widthCell}px`};
    height: ${(props) => `${props.widthCell}px`};
`;
