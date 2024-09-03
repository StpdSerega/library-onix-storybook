import type { Meta, StoryObj } from '@storybook/react';
import Label from './label';

const meta: Meta<typeof Label> = {
  title: 'Components/ui/Text',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLabel: Story = {
  args: {
    label: 'Label',
    labelColor: 'black',
    labelSize: 'text-1xs',
    className: 'tracking-normal',
    fontWeight: 'font-normal',
    labelAlign: 'text-left', 
    labelFontFamily: '',
  },
};
