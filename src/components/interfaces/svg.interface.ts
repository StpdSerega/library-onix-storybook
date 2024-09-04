export interface ISvg {
  size?: SvgSize;
}

export type SvgSize = 'sm' | 'md' | 'lg';

export const sizeMap: Record<SvgSize, string> = {
  sm: '24',
  md: '48',
  lg: '72',
};