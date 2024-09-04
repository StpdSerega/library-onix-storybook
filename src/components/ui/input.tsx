import { useState } from 'react';
import ShowPasswordIcon from './showPasswordIcon';
import HidePasswordIcon from './hidePasswordIcon';
import cn from '../../common/utils/cn.util';
import '../../tailwind.css'

export interface InputProps {
  placeholder?: string;
  type?: 'text' | 'password';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  placeholder = 'Enter your email address',
  type = 'text',
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
        className={cn(`h-9 w-120 rounded-md py-1.5 px-3 gap-1.5 border
           border-gray-400 focus:border-twiist-blue focus:outline-none
           font-roobert-trial text-1xs`)}
        style={{ backgroundColor: '#F9FAFB' }}
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
            <ShowPasswordIcon />
          ) : (
            <HidePasswordIcon />
          )}
        </button>
      )}
    </div>
  );
}
