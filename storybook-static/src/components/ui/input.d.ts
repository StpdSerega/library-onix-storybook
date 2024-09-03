export interface InputProps {
    className?: string;
    backgroundColor?: string;
    placeholder?: string;
    type?: 'text' | 'password';
    iconFill?: string;
    margin?: string;
    padding?: string;
    border?: string;
    gap?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Input({ className, backgroundColor, placeholder, type, iconFill, padding, gap, border, margin, onChange, }: InputProps): import("react/jsx-runtime").JSX.Element;
