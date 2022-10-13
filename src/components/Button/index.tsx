import { StyledButton } from './styles';

interface ButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset' | undefined;
    color?: 'red' | 'yellow' | 'green';
    selected?: boolean;
    onClick?: () => void | React.Dispatch<React.SetStateAction<any>>;
    disable?: boolean;
}

export default function Button(props: ButtonProps) {
    return (
        <StyledButton color={props.color} selected={props.selected}>
            <button type={props.type} onClick={props.onClick} disabled={props.disable}>
                {props.children}
            </button>
        </StyledButton>
    );
}
