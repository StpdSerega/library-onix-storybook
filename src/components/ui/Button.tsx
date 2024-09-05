import cn from '../../common/utils/cn.util';
import '../../tailwind.css';

export type ButtonColor = 'default' | 'inactive' | 'additional' | 'none';

export const colorMap: Record<ButtonColor, string> = {
  default: '#0171E3',
  inactive: '#67A6EE',
  additional: '#FFFFFF',
  none: 'transparent'
};
export interface ButtonProps {
  label: string;
  buttonColor?: ButtonColor;
  disabled?: boolean; 
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;    
}


export default function Button({
  label,
  buttonColor = 'default',
  disabled = false,
  onClick,
}: ButtonProps) {
  const backgroundColor = colorMap[buttonColor];
  let border = '';
  let textColor = 'white';
  let className = '';

  if (buttonColor === 'additional') {
    border = 'border-1 border-twiist-blue';
    textColor = '#0171E3';
  }

  if (buttonColor === 'none'){
    textColor = '#0171E3';
    className = 'w-24 px-0'
  }

  return (
    <button 
      className={cn(`h-11 w-120 rounded-md py-3 px-4 gap-1.5 font-roobert-trial text-1s ${border} ${className}`)}
      style={{ backgroundColor }}
      disabled={disabled}
      onClick={onClick}
    >       
      <h1
        className={`font-normal text-1s`}
        style={{ color: textColor }}>
        {label}
      </h1>
    </button>
  );
}
