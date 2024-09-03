import type { Meta, StoryObj } from '@storybook/react';
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
type Story = StoryObj<typeof meta>;

export const DefaultSignInForm: Story = {
  args: { 
    className: 'h-92 w-128 rounded-lg',
    backgroundColor: '#FFFFFF',
    boxShadow: 'shadow-form-custom-1 shadow-form-custom-2',
    padding: 'p-7.5',
    gap: 'gap-6',
    margin: '',
    label_1: { 
      label: 'Email address',
      labelColor: 'black',
      labelSize: 'text-1xs',
      margin: 'mb-1',
      className: 'tracking-normal',
      fontWeight: 'font-normal',
      labelAlign: 'text-left', 
      labelFontFamily: '',
    },
    label_2: { 
      label: 'Password', 
      margin: 'mt-5 mb-1',
      labelColor: 'black',
      labelSize: 'text-1xs',
      className: 'tracking-normal',
      fontWeight: 'font-normal',
      labelAlign: 'text-left', 
      labelFontFamily: '',
    },
    emailInput: {
      className:'h-9 w-120 rounded-md',
      backgroundColor: '#F9FAFB',
      placeholder: 'Enter your password',
      type: 'text',
      padding: 'py-1.5 px-3',
      gap: 'gap-1.5',
      border: 'border border-gray-400 focus:border-twiist-blue focus:outline-none',
      margin: '',
    }, 
    passwordInput: { 
      className:'h-9 w-120 rounded-md',
      backgroundColor: '#F9FAFB',
      placeholder: 'Enter your password',
      type: 'password',
      iconFill: 'black',
      padding: 'py-1.5 px-3',
      gap: 'gap-1.5',
      border: 'border border-gray-400 focus:border-twiist-blue focus:outline-none',
      margin: '',
    },
    textButton: {   
      label: 'Forgot your password?',
      labelColor: '#0171E3',
      labelSize: 'text-1xs',
      margin: 'mt-3'
    },
    button_1: { 
      label: 'Sign in',
      backgroundColor: '#0171E3',
      textColor: 'white',
      className:'h-11 w-120 rounded-md',
      fontWeight: 'font-normal',
      textFont: 'font-sans',
      textSize: 'text-1s',
      padding: 'py-3 px-4',
      gap: 'gap-1.5',
      margin: 'mt-7',
    },
    button_2: {                
        label: 'Create an account',
        backgroundColor: 'transparent',
        textColor: '#0171E3',
        className:'h-11 w-120 rounded-md',
        border: 'border-1 border-twiist-blue',
        fontWeight: 'font-normal',
        textFont: 'font-sans',
        textSize: 'text-1s',
        padding: 'py-3 px-4',
        gap: 'gap-1.5',
        margin: 'mt-2'
    },
  },
};