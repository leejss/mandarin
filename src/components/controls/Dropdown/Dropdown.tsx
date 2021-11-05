import React from 'react';

interface Option {
  /** 화면에 보이는 텍스트 */
  label: string;
  /** onChange에 넘어가는 값 */
  value: string;
  /** Select를 금지한다 */
  disabled?: boolean;
  /** 옵션 라벨 왼쪽에 붙은 값 */
  prefix?: React.ReactNode;
}

export type SelectOption = string | Option;

export interface DropdownProps {
  /** 옵션 리스트 */
  options: SelectOption[];
  /** Dropdown의 라벨 */
  label: React.ReactNode;
  /** Dropdown의 클래스네임 */
  className?: string;
  /** Dropdown의 placeholder */
  placeholder?: string;
  /** selection이 바뀔 때 콜백 함수 */
  onChange?(selected: string, id: string): void;
  /** select가 focus되었을 때 콜백 함수 */
  onFocus?(): void;
  /** focus가 사라졌을 때 콜백함수 */
  onBlur?(): void;
}

// normalize options -> string => option object

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  className,
  onBlur,
  onChange,
  onFocus,
}) => {
  return <div></div>;
};

function isString(option: SelectOption): option is string {
  return typeof option === 'string';
}

function normalizeStringOption(optionText: string): Option {
  return {
    label: optionText,
    value: optionText,
  };
}

function normalizeOption(option: Option) {
  if (isString(option)) {
    return normalizeStringOption(option);
  } else {
    return option;
  }
}
