import React from 'react';
import cn from '../../common/utils/cn.util';
import '../../tailwind.css';

export type LabelWidth = 'regular' | 'medium' | 'semibold'
export type LabelColor = 'primary' | 'white' | 'black' | 'secondary';
export type LabelSize = 'xs' | 'sm' | 'md' | 'lg';

export const labelColorMap: Record<LabelColor, string> = {
  primary: '#0171E3',
  secondary: '#6B7280',
  white: 'white',
  black: 'black',
};

export const labelSizeMap: Record<LabelSize, string> = {
  xs: 'text-1xs',
  sm: 'text-1s',
  md: 'text-2xl',
  lg: 'text-4xl',
};

export const labelWidthMap: Record<LabelWidth, string> = {
  regular: 'font-roobert-trial',
  medium: 'font-roobert-trial-medium',
  semibold: 'font-roobert-trial-semibold'
}

export interface LabelProps {
  label?: string;
  labelColor?: LabelColor;
  labelSize?: LabelSize;
  labelWidth?: LabelWidth;
  highlightedColor?: LabelColor;
  highlightedSize?: LabelSize;
}

export default function Label({
  label = 'Label',
  labelColor = 'black',
  labelSize = 'xs',
  labelWidth = 'regular',
  highlightedSize = 'xs',
  highlightedColor = 'black',
}: LabelProps) {
  const textColor = labelColorMap[labelColor];
  const textSize = labelSizeMap[labelSize];
  const textWidth = labelWidthMap[labelWidth];
  const highlightedTextSize = labelSizeMap[highlightedSize];
  const highlightedTextColor = labelColorMap[highlightedColor];

  const regex = /\{(.*?)\}/g;
  const parts = label.split(regex);

  return (
    <p
      className={cn(`text-left tracking-normal ${textWidth} ${textSize}`)}
      style={{ color: textColor }}
    >
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {index % 2 === 0 ? (
            <span>{part}</span> 
          ) : (
            <span
              className={cn(`${highlightedTextSize}`)}
              style={{ color: highlightedTextColor }}
            >
              {part}
            </span> 
          )}
        </React.Fragment>
      ))}
    </p>
  );
}
