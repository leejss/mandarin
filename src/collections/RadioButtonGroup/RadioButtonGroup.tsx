import React from 'react';
import { RadioButton, RadioButtonOption } from '../../controls/RadioButton';
import { Stack } from '../../layouts/Stack';
import './RadioButtonGroup.scss';

export interface RadioButtonGroupProps {
  options: RadioButtonOption[];
  value?: string;
  name?: string;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}

export const RadioButtonGroup = ({
  options,
  onChange,
  value,
  name,
}: RadioButtonGroupProps) => {
  const optionsMarkup =
    options &&
    options.map((option, index) => {
      return (
        <RadioButton
          name={name}
          key={index}
          option={option}
          onChange={onChange}
          checked={value === option.value}
        />
      );
    });
  return (
    <form>
      <Stack vertical gutter={10}>
        {optionsMarkup}
      </Stack>
    </form>
  );
};
