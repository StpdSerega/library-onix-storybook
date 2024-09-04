export type ButtonColor = 'default' | 'inactive' | 'additional';
export declare const colorMap: Record<ButtonColor, string>;
export interface ButtonProps {
    label: string;
    buttonColor?: ButtonColor;
    disabled?: boolean;
}
export default function Button({ label, buttonColor, disabled, }: ButtonProps): import("react/jsx-runtime").JSX.Element;
