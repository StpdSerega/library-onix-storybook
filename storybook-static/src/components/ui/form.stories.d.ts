import { Meta, StoryFn } from '@storybook/react';
import { default as SignInForm } from './signInForm';
import { default as VerifyCodeForm } from './verifyCodeForm';
import { default as VerifyQuestionForm } from './verifyQuestionForm';
declare const meta: Meta;
export default meta;
export declare const DefaultSignInForm: StoryFn<typeof SignInForm>;
export declare const DefaultVerifyCodeForm: StoryFn<typeof VerifyCodeForm>;
export declare const DefaultVerifyQuestionForm: StoryFn<typeof VerifyQuestionForm>;
