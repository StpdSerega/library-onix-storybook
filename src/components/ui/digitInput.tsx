import React, { forwardRef, useState, KeyboardEvent } from 'react';
import cn from '../../common/utils/cn.util';
import '../../tailwind.css'


export interface DigitInputProps {
  placeholder?: string;
  onInputChange?: (value: string) => void;
  onArrowKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onBackspace?: () => void;
}

const DigitInput = forwardRef<HTMLInputElement, DigitInputProps>(({
  placeholder = '',
  onInputChange,
  onArrowKeyPress,
  onBackspace,
}: DigitInputProps, ref) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (/^\d?$/.test(newValue)) {
      setValue(newValue);
      if (onInputChange) {
        onInputChange(newValue);
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && value === '') {
      if (onBackspace) {
        onBackspace();
      }
    }
    if (onArrowKeyPress) {
      onArrowKeyPress(e);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <input
        ref={ref}
        placeholder={placeholder}
        className={cn(`h-13.5 w-13.5 rounded-md gap-1.5 p-3
          border border-gray-400 focus:border-twiist-blue focus:outline-none
          text-1.5xl font-semibold-plus`)}
        style={{ backgroundColor: '#F9FAFB', textAlign: 'center' }}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        inputMode="numeric" 
        pattern="[0-9]*" 
        maxLength={1}
      />
    </div>
  );
});

DigitInput.displayName = 'DigitInput';

export default DigitInput;
