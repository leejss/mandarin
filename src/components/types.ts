export type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type SizeType = 'small' | 'medium' | 'large';
export type FontWeight = 'thin' | 'bold' | 'normal';
export type AlignType = 'left' | 'center' | 'right';
export type ColorType = 'primary' | 'secondary' | 'ok' | 'danger' | 'warning';
export type PaddingType =
  | number
  | {
      top?: number;
      left?: number;
      right?: number;
      bottom?: number;
    };

export type JustifyType =
  | 'start'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly'
  | 'center';
export type BorderStyleType =
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'none';
