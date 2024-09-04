import cn from '../../common/utils/cn.util';
import '../../tailwind.css';

export type ButtonColor = 'default' | 'inactive' | 'additional';

export const colorMap: Record<ButtonColor, string> = {
  default: '#0171E3',
  inactive: '#67A6EE',
  additional: 'transparent',
};
export interface ButtonProps {
  label: string;
  buttonColor?: ButtonColor;
  disabled?: boolean; 
}


export default function Button({
  label,
  buttonColor = 'default',
  disabled = false,
}: ButtonProps) {
  const backgroundColor = colorMap[buttonColor];
  let border = '';
  let textColor = 'white';

  if (buttonColor === 'additional') {
    border = 'border-1 border-twiist-blue';
    textColor = '#0171E3';
  }

  return (
    <button 
      className={cn(`h-11 w-120 rounded-md py-3 px-4 gap-1.5 font-roobert-trial ${border}`)}
      style={{ backgroundColor }}
      disabled={disabled}
    >       
      <h1
        className={`font-normal text-1s`}
        style={{ color: textColor }}>
        {label}
      </h1>
    </button>
  );
}
