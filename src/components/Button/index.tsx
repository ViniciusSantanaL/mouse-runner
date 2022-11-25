import { StyledButton } from './styles';

interface ButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset' | undefined;
    color?: 'red' | 'yellow' | 'green';
    selected?: boolean;
    onClick?: () => void | React.Dispatch<React.SetStateAction<any>>;
    disable?: boolean;
}

export default function Button({color,selected = false,onClick,disable,children,type}: ButtonProps) {
    return (
        <StyledButton color={color} selected={selected}>
            <button type={type} onClick={onClick} disabled={disable}>
                {children}
            </button>
        </StyledButton>
    );
}
