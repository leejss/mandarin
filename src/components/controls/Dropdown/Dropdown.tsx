import React from 'react';
import { usePrefixId } from '../../../hooks/usePrefixId';
import cx from 'classnames';

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

export type SelectOption = string | Option;

export interface DropdownProps {
  options?: SelectOption[];
  value?: string;
  name?: string;
  disabled?: boolean;
  className?: string;
  defaultValue?: string;
  onChange?(selected: string, id: string): void;
  onFocus?(): void;
  onBlur?(): void;
}

// normalize options -> string => option object

export const Dropdown: React.FC<DropdownProps> = ({
  options = [],
  name,
  value,
  disabled,
  className,
  onBlur,
  onChange,
  onFocus,
}) => {
  const id = usePrefixId('Dropdown', className);
  const classNames = cx('Dropdown');
  const handleChange = onChange
    ? (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.currentTarget.value, id);
      }
    : undefined;

  const normalizedOptions: Option[] = options.map(normalizeOption);
  const optionsMarkup = normalizedOptions.map(renderOption);

  return (
    <div className={classNames}>
      <select
        name={name}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {optionsMarkup}
      </select>
    </div>
  );
};

function isString(option: SelectOption): option is string {
  return typeof option === 'string';
}

function normalizeStringOption(optionText: string): Option {
  return {
    label: optionText,
    value: optionText,
  };
}

function normalizeOption(option: SelectOption) {
  if (isString(option)) {
    return normalizeStringOption(option);
  } else {
    return option;
  }
}

function renderOption(option: Option) {
  const { label, value, ...rest } = option;
  return (
    <option key={value} value={value} {...rest}>
      {label}
    </option>
  );
}

function getSelectedOption(options: Option[], value: string): Option {
  const selectedOption = options.find((option) => option.value === value);
  return selectedOption || { value: '', label: '' };
}
