import type { Meta, StoryObj } from '@storybook/react';
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
    labelColor: 'primary',
    labelSize: 'xs'
  },
};