import { default as React } from '../../../node_modules/react';
import { LabelColor, LabelSize } from './label';
export interface TextButtonProps {
    label?: string;
    labelColor?: LabelColor;
    labelSize?: LabelSize;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function TextButton({ label, labelColor, labelSize, onClick, }: TextButtonProps): import("react/jsx-runtime").JSX.Element;
