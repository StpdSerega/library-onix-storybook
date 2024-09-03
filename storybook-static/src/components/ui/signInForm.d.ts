import { InputProps } from './input';
import { ButtonProps } from './Button';
import { LabelProps } from './label';
import { TextButtonProps } from './textButton';
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
export default function SignInForm({ className, backgroundColor, boxShadow, padding, gap, margin, label_1, label_2, emailInput, passwordInput, textButton, button_1, button_2, }: SignInFormProps): import("react/jsx-runtime").JSX.Element;
export {};
