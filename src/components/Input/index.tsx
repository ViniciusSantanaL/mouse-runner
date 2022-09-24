import React from 'react';
import { Container, StyledInput, StyledLabel } from './styled';
type Props = {
    inputName: string;
    inputValue: string;
    label?: string;
    placeholder?: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function Input(props: Props) {
    return (
        <Container>
            <StyledLabel>{props.label}</StyledLabel>
            <StyledInput>
                <input value={props.inputValue} placeholder={props.placeholder} onChange={(e) => props.setInputValue(e.target.value)} />
            </StyledInput>
        </Container>
    );
}
