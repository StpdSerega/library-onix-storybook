import cn from '../../common/utils/cn.util';
import '../../tailwind.css'

export interface LabelProps {
    label?: string;
    className?: string;
    labelColor?: string;
    labelSize?: string;
    labelFontFamily?: string;
    fontWeight?: string;
    labelAlign?: string;
    margin?: string;
}

export default function Label({
    label = 'Label',
    labelColor = 'black',
    labelSize = 'text-1xs',
    margin = '',
    className = 'tracking-normal',
    fontWeight = 'font-normal',
    labelAlign = 'text-left', 
    labelFontFamily = '',
}: LabelProps) {
    return (
        <p
            className={cn(`${fontWeight} ${className} ${labelSize} ${labelAlign} ${labelFontFamily} ${margin}`)}
            style={{ color: labelColor }}
        >
            {label}
        </p>
    );
}
