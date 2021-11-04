import classNames from 'classnames';
import React from 'react';
import { AlignType, FontWeight, HeadingTags } from '../../types';
import './Heading.scss';

export interface HeadingProps {
  children?: React.ReactNode;
  element: HeadingTags;
  align?: AlignType;
  weight?: FontWeight;
  inline?: boolean;
}

export const Heading = ({
  element: Element,
  children,
  align,
  weight,
  inline,
}: HeadingProps) => {
  const classnames = classNames(
    'Heading',
    weight && weight,
    align && align,
    inline && 'inline'
  );
  return <Element className={classnames}>{children}</Element>;
};
