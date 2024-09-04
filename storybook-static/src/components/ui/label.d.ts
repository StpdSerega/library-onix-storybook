export type LabelColor = 'primary' | 'white' | 'black';
export type LabelSize = 'xs' | 'sm' | 'md' | 'lg';
export declare const labelColorMap: Record<LabelColor, string>;
export declare const labelSizeMap: Record<LabelSize, string>;
export interface LabelProps {
    label?: string;
    labelColor?: LabelColor;
    labelSize?: LabelSize;
}
export default function Label({ label, labelColor, labelSize, }: LabelProps): import("react/jsx-runtime").JSX.Element;
