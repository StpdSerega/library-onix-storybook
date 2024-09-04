import React from 'react';
import cn from '../../common/utils/cn.util';
import '../../tailwind.css';
import { LabelColor, labelColorMap, LabelSize, labelSizeMap } from './label';

export interface TextButtonProps {
    label?: string;
    labelColor?: LabelColor;
    labelSize?: LabelSize;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;    
}

export default function TextButton({
    label = 'text button',
    labelColor = 'primary',
    labelSize = 'xs',
    onClick,
}: TextButtonProps) {
    const textColor = labelColorMap[labelColor];
    const textSize = labelSizeMap[labelSize];

    return (
        <button
            onClick={onClick}
            className={cn(`text-left w-full font-roobert-trial ${textSize}`)}
            style={{
                color: textColor,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
            }}
        >
            {label}
        </button>
    );
}
