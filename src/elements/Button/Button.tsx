import classNames from 'classnames';
import React from 'react';
import { SizeType } from '../../types';
import { Icon } from '../../common';
import './Button.scss';

export type ButtonVariantType = 'contained' | 'outlined';
export type ButtonColorType =
  | 'primary'
  | 'secondary'
  | 'ok'
  | 'danger'
  | 'warning';
export type ButtonSizeType = SizeType;

export interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  variant?: ButtonVariantType;
  color?: ButtonColorType;
  size?: ButtonSizeType;
  loading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?(): void;
  id?: string;
}

export const Button = ({
  children,
  className,
  color = 'primary',
  disabled,
  fullWidth,
  loading,
  onClick,
  size = 'medium',
  id,
  variant = 'contained',
}: ButtonProps) => {
  const classnames = classNames(
    'Button',
    variant && variant,
    color && color,
    disabled && 'disabled',
    fullWidth && 'fullWidth',
    loading && 'loading',
    size && `size-${size}`,
    className
  );
  // Event Handler
  const handleClick = React.useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  const buttonMarkup = loading ? (
    <button className={classnames} disabled id={id}>
      <Icon name="spinner" width={50} height={20} />
    </button>
  ) : (
    <button
      id={id}
      className={classnames}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );

  return buttonMarkup;
};
