import React from 'react';
import './Switch.scss';
import cx from 'classnames';

export interface SwitchProps {
  on?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
}

export const Switch = ({ disabled }: SwitchProps) => {
  const classnames = cx('Switch', disabled && 'disabled');
  return (
    <label>
      <input
        className={classnames}
        type="checkbox"
        role="switch"
        disabled={disabled}
      />
    </label>
  );
};
