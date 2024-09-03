import { useState } from 'react';
import ShowPasswordIcon from './showPasswordIcon';
import HidePasswordIcon from './hidePasswordIcon';
import cn from '../../common/utils/cn.util';
import '../../tailwind.css'

export interface InputProps {
  className?: string;
  backgroundColor?: string;
  placeholder?: string;
  type?: 'text' | 'password';
  iconFill?: string;
  margin?: string;
  padding?: string;
  border?: string;
  gap?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  className = 'h-9 w-120 rounded-md',
  backgroundColor = '#F9FAFB',
  placeholder = 'Enter your email address',
  type = 'text',
  iconFill = 'black',
  padding = 'py-1.5 px-3',
  gap = 'gap-1.5',
  border = 'border border-gray-400 focus:border-twiist-blue focus:outline-none',
  margin = '',
  onChange,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        className={cn(`${className} ${margin} ${padding} ${gap} ${border}`)}
        style={{ backgroundColor }}
        type={type === 'password' && showPassword ? 'text' : type}
        onChange={onChange}
      />
      {type === 'password' && (
        <button
          type="button"
          className="absolute inset-y-0 right-3 flex items-center"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <ShowPasswordIcon fill={iconFill} />
          ) : (
            <HidePasswordIcon fill={iconFill} />
          )}
        </button>
      )}
    </div>
  );
}
