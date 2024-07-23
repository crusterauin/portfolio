interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    style?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, style}) => {
    return (
        <button className={`w-48 h-9 ${style}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
