import React from 'react';
import cx from 'classnames';
import './ButtonGroup.scss';
import { SizeType } from '../../types';

export interface ButtonGroupProps {
  size?: SizeType;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, size }) => {
  const classnames = cx('ButtonGroup');
  return <div className={classnames}>{children}</div>;
};
