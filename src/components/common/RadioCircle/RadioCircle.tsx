import React from 'react';
import { css, cx } from '@emotion/css';
import { Icon } from '../Icon/Icon';
import './RadioCircle.scss';

export type RadioSizeType = {
  width?: number;
  height?: number;
};

export interface RadioCircleProps {
  size?: RadioSizeType;
  checked?: boolean;
  onClick?(event: React.MouseEvent<HTMLInputElement>): void;
}

export const RadioCircle = ({ size, onClick, checked }: RadioCircleProps) => {
  const sizeStyle = css`
    & {
      width: ${size?.width}px;
      height: ${size?.height}px;
    }
  `;

  const classnames = cx('RadioCircle', size && sizeStyle, checked && 'checked');

  return (
    <div className={classnames} onClick={onClick}>
      {checked && <Icon name="circle" />}
    </div>
  );
};
