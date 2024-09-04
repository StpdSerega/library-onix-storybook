import type { Meta, StoryFn } from '@storybook/react';
import Label from './label'; 
import TextButton from './textButton';
import Input from './input';
import Button from './Button';
import SignInForm from './signInForm';

const meta: Meta<typeof SignInForm> = {
  title: 'Components/ui/Form',
  component: SignInForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryFn<typeof SignInForm>;

export const DefaultTestForm: Story = () => {
  return (
    <SignInForm>
      <Label label='Email address' />
      <Input placeholder='Enter your email' />
      <Label label='Password' />
      <Input placeholder='Enter your password' type='password' />
      <TextButton label='Forgot your password?' onClick={()=> console.log('forgot password')} />
      <Button 
        label='Sign in'
        onClick={()=> console.log('Sign In')}
      />
      <Button
        label='Create an account' 
        buttonColor='additional'
        onClick={()=> console.log('Sign In')}
      />
    </SignInForm>
  );
};