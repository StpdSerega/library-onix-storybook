import type { Meta, StoryObj } from '@storybook/react';
import HidePasswordIcon from './hidePasswordIcon';

const meta: Meta<typeof HidePasswordIcon> = {
  title: 'Components/ui/Icon', 
  component: HidePasswordIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const HideIcon: Story = {
  args: {
    size: 'sm',
  },
};