import type { Meta, StoryObj } from '@storybook/react';
import DigitInputForm from './digitInputForm';

const digitInputMeta: Meta<typeof DigitInputForm> = {
  title: 'Components/ui/Digit input',
  component: DigitInputForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default digitInputMeta;

type DigitInputStory = StoryObj<typeof DigitInputForm>;

export const DefaultDigitInputForm: DigitInputStory = {
  args: { 
    length: 6,   
  },
};


