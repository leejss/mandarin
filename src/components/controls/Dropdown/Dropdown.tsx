import React from 'react';
import cx from 'classnames';
import './Dropdown.scss';
import { Icon } from '../../common';
import { usePrefixId } from '../../../hooks/usePrefixId';

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
  label?: string;
  onChange?(selected: string): void;
  onFocus?(): void;
  onBlur?(): void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options = [],
  name,
  value,
  label,
  disabled,
  className,
  onBlur,
  onChange,
  onFocus,
}) => {
  const [listShow, setListShow] = React.useState(false);
  const handleClick = () => {
    setListShow((p) => !p);
  };
  const id = usePrefixId('Dropdown', 1);
  const classNames = cx('Dropdown', className);
  const handleChange = onChange
    ? (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.currentTarget.value);
      }
    : undefined;

  const normalizedOptions: Option[] = options.map(normalizeOption);
  const optionsMarkup = normalizedOptions.map(renderOption);
  const itemMarkup = listShow && normalizedOptions.map(renderItem);

  return (
    <div className={classNames}>
      <div className="SelectInputWrapper">
        <div className="SelectInput">
          <label htmlFor={id}>{value}</label>
          <Icon name="arrowDown" onClick={handleClick} />
        </div>
        <select
          id={id}
          aria-label={label}
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

      <ul>{itemMarkup}</ul>
    </div>
  );
};

// String type 검사
function isString(option: SelectOption): option is string {
  return typeof option === 'string';
}

// String으로 주어진 옵션을 객체로 transform
function normalizeStringOption(optionText: string): Option {
  return {
    label: optionText,
    value: optionText,
  };
}

// SelectOption타입을 받아 uniform 옵션을 리턴
function normalizeOption(option: SelectOption) {
  if (isString(option)) {
    return normalizeStringOption(option);
  } else {
    return option;
  }
}

// Render Option
function renderOption(option: Option) {
  const { label, value, ...rest } = option;
  return (
    <option key={value} value={value} {...rest}>
      {label}
    </option>
  );
}

// Render div option
function renderItem(option: Option) {
  const { label, value } = option;
  return <li key={value}>{label}</li>;
}
