export interface ButtonProps {
    label: string;
    className?: string;
    backgroundColor?: string;
    disabledBackgroundColor?: string;
    border?: string;
    textColor?: string;
    textFont?: string;
    fontWeight?: string;
    textSize?: string;
    margin?: string;
    padding?: string;
    gap?: string;
    disabled?: boolean;
}
export default function Button({ label, border, backgroundColor, disabledBackgroundColor, textColor, textFont, fontWeight, className, padding, gap, textSize, margin, disabled, }: ButtonProps): import("react/jsx-runtime").JSX.Element;
