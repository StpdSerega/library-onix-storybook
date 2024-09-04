import type { Meta, StoryObj } from '@storybook/react';
import ShowPasswordIcon from './showPasswordIcon';

const meta: Meta<typeof ShowPasswordIcon> = {
  title: 'Components/ui/Icon', 
  component: ShowPasswordIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ShowIcon: Story = {
  args: {
  },
};