interface ButtonProps {
    label: string;
    secondary?: boolean;
    fullWidth?: boolean;
    large?: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
}
const Button: React.FC<ButtonProps> = ({
    label,
    secondary,
    fullWidth,
    large,
    onClick,
    disabled,
    outline,
}) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`
    disabled:opacity-70 disabled:cursor-not-allowed rounded-full font-semibold hover:opacity-80 border-2 transition 
    ${fullWidth ? "w-full" : "w-fit"}
    ${secondary ? "bg-white" : "bg-black"}
    ${secondary ? "text-black" : "text-white"}
    ${secondary ? "border-black dark:border-white" : "border-black dark:border-white"}
    ${large ? "text-xl" : "text-md"}
    ${large ? "px-5" : "px-4"}
    ${large ? "py-3" : "py-2"}
    ${outline ? "bg-transparent" : ""}
    ${outline ? "border-white" : ""}
    ${outline ? "text-white" : ""}
    `}
        >
            {label}
        </button>
    );
};
export default Button;
