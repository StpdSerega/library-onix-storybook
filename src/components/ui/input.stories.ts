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
    type: "text"
  },
};

export const PasswordInput: Story = {
  args: {
    placeholder: 'Enter your password',
    type: 'password',
   },
};