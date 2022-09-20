import { StyledButton } from './styles';

interface ButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset' | undefined;
    onClick?: () => void;
}

export default function Button(props: ButtonProps) {
    return (
        <StyledButton>
            <button type={props.type} onClick={props.onClick}>
                {props.children}
            </button>
        </StyledButton>
    );
}
