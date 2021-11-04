import React from 'react';
import { SizeType } from '../../types';
import cx from 'classnames';
import './Input.scss';

export type InputSizeType = SizeType;
export interface InputProps {
  className?: string;
  placeholder?: string;
  value?: string;
  ok?: boolean;
  danger?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}

export const Input = ({
  placeholder,
  value,
  ok,
  danger,
  className,
  leftIcon,
  rightIcon,
  loading,
  onChange,
}: InputProps) => {
  const classnames = cx(
    'Input',
    ok && 'ok',
    danger && 'danger',
    loading && 'loading',
    className && className
  );

  const iconInput = (
    <div className="IconInputWrapper">
      {leftIcon && leftIcon}
      <input
        className="IconInput"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {rightIcon && rightIcon}
    </div>
  );

  if (leftIcon || rightIcon) {
    return iconInput;
  }

  return (
    <input
      className={classnames}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
