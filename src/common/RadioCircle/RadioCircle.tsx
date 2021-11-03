import React from "react";
import { css, cx } from "@emotion/css";
import { Icon } from "../Icon/Icon";
import "./RadioCircle.scss";

export type RadioSizeType = {
  width?: number;
  height?: number;
};

export interface RadioCircleProps {
  size?: RadioSizeType;
  on?: boolean;
  off?: boolean;
  onClick?(event: React.MouseEvent<HTMLInputElement>): void;
}

export const RadioCircle = ({ size, onClick, on, off }: RadioCircleProps) => {
  const sizeStyle = css`
    & {
      width: ${size?.width}px;
      height: ${size?.height}px;
    }
  `;

  const classnames = cx(
    "RadioCircle",
    size && sizeStyle,
    on && "on",
    off && "off"
  );

  return (
    <div className={classnames} onClick={onClick}>
      {on && <Icon name="circle" />}
    </div>
  );
};
