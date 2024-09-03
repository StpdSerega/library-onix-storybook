import { Meta, StoryObj } from '@storybook/react';
import { default as Button } from './Button';
declare const meta: Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultButton: Story;
export declare const InactiveButton: Story;
export declare const AdditionalButton: Story;
