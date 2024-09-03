import { Meta, StoryObj } from '@storybook/react';
import { default as Input } from './input';
declare const meta: Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultInput: Story;
export declare const PasswordInput: Story;
