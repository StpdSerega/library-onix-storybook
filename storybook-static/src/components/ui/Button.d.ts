export type ButtonColor = 'default' | 'inactive' | 'additional' | 'none';
export declare const colorMap: Record<ButtonColor, string>;
export interface ButtonProps {
    label: string;
    buttonColor?: ButtonColor;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function Button({ label, buttonColor, disabled, onClick, }: ButtonProps): import("react/jsx-runtime").JSX.Element;
