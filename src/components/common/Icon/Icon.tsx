import React from 'react';
import { ReactComponent as SVGSearch } from './svgs/search.svg';
import { ReactComponent as SVGClose } from './svgs/close.svg';
import { ReactComponent as SVGSPinner } from './svgs/spinner.svg';
import { ReactComponent as SVGCircle } from './svgs/circle.svg';
import { ReactComponent as SVGArrowDown } from './svgs/arrow_down.svg';
import { css, cx } from '@emotion/css';
import './Icon.scss';

export type IconName = 'search' | 'close' | 'spinner' | 'circle' | 'arrowDown';

export interface IconProps {
  name?: IconName;
  onClick?(): void;
  width?: number;
  height?: number;
}

export const Icon: React.FC<IconProps> = ({ name, onClick, height, width }) => {
  const widthStyle = css`
    & {
      width: ${width}px;
    }
  `;
  const heighStyle = css`
    & {
      height: ${height}px;
    }
  `;
  const classnames = cx('Icon', widthStyle, heighStyle);
  switch (name) {
    case 'close':
      return <SVGClose className={classnames} onClick={onClick} />;
    case 'search':
      return <SVGSearch className={classnames} onClick={onClick} />;
    case 'spinner':
      return <SVGSPinner className={classnames} onClick={onClick} />;
    case 'circle':
      return <SVGCircle className={classnames} onClick={onClick} />;
    case 'arrowDown':
      return <SVGArrowDown className={classnames} onClick={onClick} />;
    default:
      return null;
  }
};
