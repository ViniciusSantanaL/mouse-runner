import Input from 'components/Input';
import { useState } from 'react';
import { Container } from '../styles';
import Grid from './Grid';
import { ContentInput } from './styled';

export default function StepOne() {
    const [width, setWidth] = useState('700');
    const [row, setRow] = useState('10');
    const [columns, setColumns] = useState('10');

    return (
        <Container>
            <Grid />
            <ContentInput>
                <Input inputName="width" inputValue={width} setInputValue={setWidth} label="Width" />
                <Input inputName="row" inputValue={row} setInputValue={setRow} label="Row" />
                <Input inputName="columns" inputValue={columns} setInputValue={setColumns} label="Columns" />
            </ContentInput>
        </Container>
    );
}
