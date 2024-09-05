export type LabelWidth = 'regular' | 'medium' | 'semibold';
export type LabelColor = 'primary' | 'white' | 'black' | 'secondary';
export type LabelSize = 'xs' | 'sm' | 'md' | 'lg';
export declare const labelColorMap: Record<LabelColor, string>;
export declare const labelSizeMap: Record<LabelSize, string>;
export declare const labelWidthMap: Record<LabelWidth, string>;
export interface LabelProps {
    label?: string;
    labelColor?: LabelColor;
    labelSize?: LabelSize;
    labelWidth?: LabelWidth;
    highlightedColor?: LabelColor;
    highlightedSize?: LabelSize;
    highlightedWidth?: LabelWidth;
}
export default function Label({ label, labelColor, labelSize, labelWidth, highlightedSize, highlightedColor, highlightedWidth }: LabelProps): import("react/jsx-runtime").JSX.Element;
