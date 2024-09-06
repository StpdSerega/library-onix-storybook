import React, { useEffect, useRef, useState } from 'react';
import cn from '../../common/utils/cn.util';
import DigitInput from './digitInput';

interface DigitInputFormProps {
  length?: number;
}

export default function DigitInputForm({
  length = 6,
}: DigitInputFormProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) return null;

  const handleInputChange = (index: number, value: string) => {
    if (value) {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleArrowKeyPress = (index: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'ArrowLeft':
        if (index > 0) {
          inputRefs.current[index - 1]?.focus();
        }
        break;
      case 'ArrowRight':
        if (index < inputRefs.current.length - 1) {
          inputRefs.current[index + 1]?.focus();
        }
        break;
      default:
        break;
    }
  };

  const handleBackspace = (index: number) => () => {
    const currentInput = inputRefs.current[index];

    if (currentInput?.value === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (currentInput) {
      currentInput.value = '';
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('Text').replace(/\D/g, '');
    const digits = pastedData.split('').slice(0, length); 

    digits.forEach((digit, i) => {
      if (inputRefs.current[i]) {
        inputRefs.current[i]!.value = digit;
        inputRefs.current[i]?.focus();
      }
    });

    const lastIndex = digits.length - 1;
    if (lastIndex < inputRefs.current.length - 1) {
      inputRefs.current[lastIndex + 1]?.focus();
    }
  };

  return (
    <form
      className={cn(`flex gap-1.5 h-13.5 w-96`)}
      style={{ backgroundColor: 'transparent' }}
      onPaste={handlePaste}
    >
      {Array.from({ length }).map((_, index) => (
        <DigitInput
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          onInputChange={(value) => handleInputChange(index, value)}
          onArrowKeyPress={handleArrowKeyPress(index)}
          onBackspace={handleBackspace(index)}
        />
      ))}
    </form>
  );
}
