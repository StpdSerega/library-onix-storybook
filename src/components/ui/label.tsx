import cn from '../../common/utils/cn.util';
import '../../tailwind.css'

export type LabelColor = 'primary' | 'white' | 'black';
export type LabelSize = 'xs' | 'sm' | 'md' | 'lg';

export const labelColorMap: Record<LabelColor, string> = {
  primary: '#0171E3',
  white: 'white',
  black: 'black',
};

export const labelSizeMap: Record<LabelSize, string> = {
    xs: 'text-1xs',
    sm: 'text-1s',
    md: 'text-2xl',
    lg: 'text-4xl',
  };
export interface LabelProps {
    label?: string;
    labelColor?: LabelColor;
    labelSize?: LabelSize;
}

export default function Label({
    label = 'Label',
    labelColor = 'black',
    labelSize = 'xs',
}: LabelProps) {
    const textColor = labelColorMap[labelColor];
    const textSize = labelSizeMap[labelSize]

    return (
        <p
            className={cn(`text-left tracking-normal font-roobert-trial ${textSize}`)}
            style={{ color: textColor }}
        >
            {label}
        </p>
    );
}
