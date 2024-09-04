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
   
  },
};