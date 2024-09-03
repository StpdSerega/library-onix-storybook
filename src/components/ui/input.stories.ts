import type { Meta, StoryObj } from '@storybook/react';
import Input from './input';

const meta: Meta<typeof Input> = {
  title: 'Components/ui/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    placeholder: 'Enter your email address',
  },
};

export const PasswordInput: Story = {
  args: {
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
};