import { Meta, StoryFn } from '@storybook/react';
import { default as SignInForm } from './signInForm';
declare const meta: Meta<typeof SignInForm>;
export default meta;
type Story = StoryFn<typeof SignInForm>;
export declare const DefaultTestForm: Story;
