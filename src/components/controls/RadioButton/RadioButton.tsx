import { nanoid } from 'nanoid';
import React from 'react';
import { RadioCircle } from '../../common/RadioCircle';
import { Stack } from '../../layouts/Stack';
import cx from 'classnames';
import './RadioButton.scss';

export type RadioButtonOption = {
  value: string;
  label: string;
  id?: string;
};

export interface RadioButtonProps {
  option?: RadioButtonOption;
  name?: string;
  checked?: boolean;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}

export const RadioButton = ({
  checked,
  name,
  onChange,
  option,
}: RadioButtonProps) => {
  const id = nanoid();
  const classnames = cx('RadioButton');
  return (
    <div className={classnames}>
      <label htmlFor={id}>
        <Stack horizontal align="center">
          <RadioCircle checked={checked} />
          {option?.label}
        </Stack>
      </label>

      <input
        id={id}
        type="radio"
        value={option?.value}
        aria-label={option?.label}
        checked={checked}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};
