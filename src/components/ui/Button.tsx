import cn from '../../common/utils/cn.util';
import '../../tailwind.css'

export interface ButtonProps {
  label: string;
  className?: string;
  backgroundColor?: string;
  disabledBackgroundColor?: string;
  border?: string;
  textColor?: string;
  textFont?: string;
  fontWeight?: string;
  textSize?: string;
  margin?: string;
  padding?: string;
  gap?: string;
  disabled?: boolean; 
}


export default function Button({
  label,
  border,
  backgroundColor = '#0171E3',
  disabledBackgroundColor = '#67A6EE',
  textColor = 'white',
  textFont = '',
  fontWeight = 'font-normal',
  className='h-11 w-120 rounded-md',
  padding = 'py-3 px-4',
  gap = 'gap-1.5',
  textSize='text-1s',
  margin = '',
  disabled = false,
}: ButtonProps) {
return (
  <button 
    className={cn(`${className} ${border} ${padding} ${gap} ${margin}`)}
    style={{ backgroundColor: disabled ? disabledBackgroundColor : backgroundColor }}
    disabled={disabled}
  >       
    <h1
      className={`${fontWeight} ${textFont} ${textSize}`}
      style={{ color: textColor }}>
      {label}
    </h1>
  </button>
);
}
