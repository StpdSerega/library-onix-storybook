import { LabelColor, LabelSize } from './label';
export interface TextButtonProps {
    label?: string;
    labelColor?: LabelColor;
    labelSize?: LabelSize;
    onClick?: () => void;
}
export default function TextButton({ label, labelColor, labelSize, onClick, }: TextButtonProps): import("react/jsx-runtime").JSX.Element;
