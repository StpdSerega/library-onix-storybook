import { default as React, KeyboardEvent } from '../../../node_modules/react';
export interface DigitInputProps {
    placeholder?: string;
    onInputChange?: (value: string) => void;
    onArrowKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
    onBackspace?: () => void;
}
declare const DigitInput: React.ForwardRefExoticComponent<DigitInputProps & React.RefAttributes<HTMLInputElement>>;
export default DigitInput;
