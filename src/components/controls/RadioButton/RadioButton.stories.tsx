import React from 'react';
import { RadioButton } from './RadioButton';
import { ComponentMeta } from '@storybook/react';

export default {
  title: 'Controls/RadioButton',
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

export const Basic = () => {
  return (
    <div>
      <RadioButton
        option={{
          label: '여기에 라벨이 들어갑니다.',
          value: '여기에 값이 들어갑니다.',
        }}
      />
      <br />
      <RadioButton
        checked={true}
        option={{
          label: '여기에 라벨이 들어갑니다.',
          value: '여기에 값이 들어갑니다.',
        }}
      />
    </div>
  );
};
