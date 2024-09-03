import cn from '../../common/utils/cn.util';
import '../../tailwind.css'

export interface TextButtonProps {
    label?: string;
    labelColor?: string;
    labelSize?: string;
    labelAlign?: string;
    margin?: string;
    onClick?: () => void;
}

export default function TextButton({
    label = 'Forgot your password?',
    labelColor = '#0171E3',
    labelSize = 'text-1xs',
    labelAlign = 'text-left',
    margin = '',
    onClick,
}: TextButtonProps) {
    return (
        <button
            onClick={onClick}
            className={cn(`${margin} ${labelSize} ${labelAlign} w-full`)}
            style={{
                color: labelColor,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
            }}
        >
            {label}
        </button>
    );
}
