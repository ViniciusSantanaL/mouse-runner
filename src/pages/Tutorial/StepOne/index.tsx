import Button from 'components/Button';
import Input from 'components/Input';
import { useState } from 'react';
import Grid from './Grid';
import { ButtomGroup, Container, Content, ContentInput } from './styles';

export default function StepOne() {
    const [width, setWidth] = useState(800);
    const [rows, setRows] = useState(20);
    const [columns, setColumns] = useState(20);

    const [selectedButtonOne, setSelectedButtonOne] = useState<boolean>(false);
    const [selectedButtonTwo, setSelectedButtonTwo] = useState<boolean>(true);
    const [selectedButtonThree, setSelectedButtonThree] = useState<boolean>(false);

    function handleSelectButton(num: number) {
        switch (num) {
            case 1:
                setSelectedButtonOne(true);
                setSelectedButtonTwo(false);
                setSelectedButtonThree(false);
                setWidth(400);
                setColumns(10);
                setRows(10);
                break;

            case 2:
                setSelectedButtonOne(false);
                setSelectedButtonTwo(true);
                setSelectedButtonThree(false);
                setWidth(800);
                setColumns(20);
                setRows(20);
                break;

            case 3:
                setSelectedButtonOne(false);
                setSelectedButtonTwo(false);
                setSelectedButtonThree(true);
                setWidth(1200);
                setColumns(30);
                setRows(30);
                break;
        }
    }

    return (
        <Container>
            <Grid width={width} rows={rows} columns={columns} />
            <Content>
                <ContentInput>
                    <Input inputName={'width'} inputValue={width} label={'Width'} type={'text'} />
                    <Input inputName={'row'} inputValue={rows} label={'Row'} type={'text'} />
                    <Input inputName={'columns'} inputValue={columns} label={'Columns'} type={'text'} />
                </ContentInput>
                <ButtomGroup>
                    <Button type={'button'} onClick={() => handleSelectButton(1)} color={'green'} selected={selectedButtonOne}>
                        SMALL
                    </Button>
                    <Button type={'button'} onClick={() => handleSelectButton(2)} color={'yellow'} selected={selectedButtonTwo}>
                        MEDIUM
                    </Button>
                    <Button type={'button'} onClick={() => handleSelectButton(3)} color={'red'} selected={selectedButtonThree}>
                        LARGE
                    </Button>
                </ButtomGroup>
            </Content>
        </Container>
    );
}
