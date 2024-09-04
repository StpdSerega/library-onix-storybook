import { useState } from 'react';
import Input  from './input';
import Button from './Button';
import cn from '../../common/utils/cn.util';
import Label  from './label';
import '../../tailwind.css';
import TextButton from './textButton';
import { isValidEmail } from '../../common/utils/isValidEmail.util';
import { isValidPassword } from '../../common/utils/isPasswordValid.util';


export default function SignInForm() {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const isEmailValid = isValidEmail(emailValue);
    const isPasswordValid = isValidPassword(passwordValue);

    const isButtonDisabled = !isEmailValid || !isPasswordValid;

return (
    <form className={cn(`h-92 w-128 rounded-lg shadow-form-custom p-7.5 gap-6`)} style={{ backgroundColor: '#FFFFFF' }}>  
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
                <div className='flex flex-col gap-1.5'>
                    <Label label='Email address' />
                    <Input placeholder='Enter your email' onChange={(e) => setEmailValue(e.target.value)}/>
                </div>
                <div className='flex flex-col gap-1.5'>
                    <Label label='Password' />
                    <Input placeholder='Enter your password' type='password' onChange={(e) => setPasswordValue(e.target.value)}/>
                    <TextButton label='Forgot your password?'/>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <Button 
                    label='Sign in'
                    buttonColor={isButtonDisabled ? 'inactive' : 'default'}
                    disabled={isButtonDisabled} 
                />
                <Button label='Create an account' buttonColor='additional' />
            </div>
        </div>
    </form>
);
}
