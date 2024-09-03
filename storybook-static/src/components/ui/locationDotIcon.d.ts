import { ReactNode } from '../../../node_modules/react';
import { default as ISvg } from '../interfaces/svg.interface';
export interface ISvgWithChildren extends ISvg {
    children?: ReactNode;
}
export default function LocationDotIcon({ fill, height, width, children, }: ISvgWithChildren): import("react/jsx-runtime").JSX.Element;
