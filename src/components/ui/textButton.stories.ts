import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TextButton from './textButton';

const meta: Meta<typeof TextButton> = {
  title: 'Components/ui/Text button',
  component: TextButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTextButton: Story = {
  args: {
    label: 'Forgot your password?',
    labelColor: '#0171E3',
    labelSize: 'text-1xs',
    onClick: action('text button click'),
  },
};