export interface InputProps {
    placeholder?: string;
    type?: 'text' | 'password';
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Input({ placeholder, type, onChange, }: InputProps): import("react/jsx-runtime").JSX.Element;
