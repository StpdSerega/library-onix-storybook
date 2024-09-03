import type { Meta, StoryObj } from '@storybook/react';
import HidePasswordIcon from './hidePasswordIcon';

const meta: Meta<typeof HidePasswordIcon> = {
  title: 'Components/ui/Icon', 
  component: HidePasswordIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: {
      control: {
        type: 'color',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const HideIcon: Story = {
  args: {
    fill: '#000000',
    width: 24,
    height: 24
  },
};