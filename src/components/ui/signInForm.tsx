import { useState } from 'react';
import Input, { InputProps } from './input';
import Button, { ButtonProps } from './Button';
import cn from '../../common/utils/cn.util';
import Label, { LabelProps } from './label';
import '../../tailwind.css';
import TextButton, { TextButtonProps } from './textButton';
import { isValidEmail } from '../../common/utils/isValidEmail.util';
import { isValidPassword } from '../../common/utils/isPasswordValid.util';

interface SignInFormProps {
    className?: string;
    boxShadow?: string;
    margin?: string;
    padding?: string;
    gap?: string;
    backgroundColor?: string;
    label_1?: LabelProps;
    label_2?: LabelProps;
    emailInput?: InputProps; 
    passwordInput?: InputProps;
    textButton?: TextButtonProps;
    button_1?: ButtonProps;
    button_2?: ButtonProps;
}

export default function SignInForm({
    className = 'h-92 w-128 rounded-lg',
    backgroundColor = '#FFFFFF',
    boxShadow = 'shadow-form-custom-1 shadow-form-custom-2',
    padding = 'p-7.5',
    gap = 'gap-6',
    margin = '',
    label_1 = { label: 'Email address', margin: 'mb-1' },
    label_2 = { label: 'Password', margin: 'mt-7 mb-1'},
    emailInput = {}, 
    passwordInput = { placeholder: 'Enter your password', type: 'password' },
    textButton = {margin: 'mt-4'},
    button_1 = { label: 'Sign in', margin: 'mt-7'},
    button_2 = {            
        backgroundColor: "transparent",
        border: "border-1 border-twiist-blue",
        label: "Create an account",
        textColor: "#0171E3",
        margin: 'mt-2'
    },

}: SignInFormProps) {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const isEmailValid = isValidEmail(emailValue);
    const isPasswordValid = isValidPassword(passwordValue);

    const isButtonDisabled = !isEmailValid || !isPasswordValid;

    return (
        <form className={cn(`${boxShadow} ${className} ${margin} ${padding} ${gap}`)} style={{ backgroundColor }}>  
            <Label {...label_1} />
            <Input 
                {...emailInput} 
                onChange={(e) => setEmailValue(e.target.value)} 
            />
            <Label {...label_2} />
            <Input 
                {...passwordInput} 
                onChange={(e) => setPasswordValue(e.target.value)} 
            />
            <TextButton {...textButton} />
            <Button 
                {...button_1} 
                disabled={isButtonDisabled} 
                backgroundColor={isButtonDisabled ? 'green' : button_1.backgroundColor} 
            />
            <Button {...button_2} />   
        </form>
    );
}
