import type { Meta, StoryFn } from '@storybook/react';
import SignInForm from './signInForm';
import Label from './label';
import TextButton from './textButton';
import Input from './input';
import Button from './Button';
import VerifyCodeForm from './verifyCodeForm';
import DigitInputForm from './digitInputForm';
import VerifyQuestionForm from './verifyQuestionForm';

// Default export for Storybook to use metadata about this story file
const meta: Meta = {
  title: 'Components/ui/Form',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const DefaultSignInForm: StoryFn<typeof SignInForm> = () => {
  return (
    <SignInForm>
      <Label label='Email address' />
      <Input placeholder='Enter your email' />
      <Label label='Password' />
      <Input placeholder='Enter your password' type='password' />
      <TextButton label='Forgot your password?' onClick={() => console.log('forgot password')} />
      <Button label='Sign in' onClick={() => console.log('Sign In')} />
      <Button
        label='Create an account'
        buttonColor='additional'
        onClick={() => console.log('Create Account')}
      />
    </SignInForm>
  );
};

export const DefaultVerifyCodeForm: StoryFn<typeof VerifyCodeForm> = () => {
  return (
    <VerifyCodeForm>
      <Label
        label={`A verification code has been sent to your registered phone number ending in {***-55}.
           Please enter the code below to proceed.`}  // To create highlighted text, enclose it inside { }
        labelColor='secondary'
        labelSize='sm'
        highlightedColor='black'
        highlightedSize='sm'
      />
      <DigitInputForm />
      <Button label='Submit' onClick={() => console.log('Submit')} />
      <Button
        label='Resend code'
        buttonColor='none'
        onClick={() => console.log('Resend code')}
      />
    </VerifyCodeForm>
  );
};

export const DefaultVerifyQuestionForm: StoryFn<typeof VerifyQuestionForm> = () => {
  return (
    <VerifyQuestionForm>
      <Label
        label='What is your mother’s maiden name?'
        labelSize='sm'
        labelWidth='semibold'
      />
      <Label label='Answer' />
      <Input placeholder='Type here' />
      <Button label='Submit' onClick={() => console.log('Submit')} />
    </VerifyQuestionForm>
  );
};
