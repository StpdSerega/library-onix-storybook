import type { Meta, StoryObj } from '@storybook/react';
import LocationDotIcon from './locationDotIcon';

const meta: Meta<typeof LocationDotIcon> = {
  title: 'Components/ui/Icon', 
  component: LocationDotIcon,
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

export const LocationIcon: Story = {
  args: {
    fill: '#000000',
    width: 24,
    height: 24
  },
};