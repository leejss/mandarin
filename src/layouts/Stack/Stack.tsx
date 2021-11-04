import React from "react";
import cx from "classnames";
import "./Stack.scss";
import { JustifyType } from "../../types";
import { css } from "@emotion/css";

export type StackJustifyType = JustifyType;
export type StackAlingType = "start" | "center" | "end";

export interface StackProps {
  gutter?: number;
  inline?: boolean;
  horizontal?: boolean;
  vertical?: boolean;
  reverse?: boolean;
  justify?: StackJustifyType;
  align?: StackAlingType;
  fullWidth?: boolean;
  fullHeight?: boolean;
  className?: string;
}

export const Stack: React.FC<StackProps> = ({
  gutter,
  inline,
  children,
  horizontal,
  vertical,
  reverse,
  justify,
  align,
  fullHeight,
  fullWidth,
  className,
}) => {
  const gutterStlye = css`
    &.horizontal {
      > * {
        margin-left: ${gutter}px;
        &:first-child {
          margin-left: 0px;
        }
      }
    }

    &.vertical {
      > * {
        margin-bottom: ${gutter}px;
        &:last-child {
          margin-bottom: 0px;
        }
      }
    }
  `;
  const classnames = cx(
    "Stack",
    inline && "inline",
    horizontal && "horizontal",
    vertical && "vertical",
    reverse && "reverse",
    justify && justify,
    align && `align-${align}`,
    gutter && gutterStlye,
    className && className
  );
  return <div className={classnames}>{children}</div>;
};
