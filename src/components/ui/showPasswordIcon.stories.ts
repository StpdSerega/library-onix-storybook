import type { Meta, StoryObj } from '@storybook/react';
import ShowPasswordIcon from './showPasswordIcon';

const meta: Meta<typeof ShowPasswordIcon> = {
  title: 'Components/ui/Icon', 
  component: ShowPasswordIcon,
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

export const ShowIcon: Story = {
  args: {
    fill: '#000000',
    width: 24,
    height: 24
  },
};