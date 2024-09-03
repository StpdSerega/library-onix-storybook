import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/ui/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    label: 'Sign in',
  },
};

export const InactiveButton: Story = {
  args: {
    label: 'Sign in',
    backgroundColor: '#67A6EE',
    textColor: 'white',
    className:'h-11 w-120 rounded-md',
    fontWeight: 'font-normal',
    textFont: 'font-sans',
    textSize: 'text-1s',
    padding: 'py-3 px-4',
    gap: 'gap-1.5',
    margin: '',
  }
}

export const AdditionalButton: Story = {
  args: {
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
    margin: '',
  }
}