import React from 'react';
import { Container, StyledInput, StyledLabel } from './styled';
type Props = {
    inputName: string;
    inputValue: string | number;
    label?: string;
    placeholder?: string;
    setInputValue?: React.Dispatch<React.SetStateAction<any>>;
    type: 'text' | 'number' | 'date' | 'file' | 'password' | 'hidden';
};

export default function Input(props: Props) {
    return (
        <Container>
            <StyledLabel>{props.label}</StyledLabel>
            <StyledInput>
                <input value={props.inputValue} placeholder={props.placeholder} onChange={(e) => props.setInputValue && props.setInputValue(e.target.value)} type={props.type} />
            </StyledInput>
        </Container>
    );
}
