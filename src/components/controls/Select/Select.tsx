import React from 'react';
import { Icon } from '../../common';
import './Select.scss';

export interface SelectProps {
  options: string[];
  value: string;
  onChange?(option: string): void;
}

export const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = React.useCallback(() => {
    setOpen((p) => !p);
  }, [setOpen]);

  const handleClick = (event: React.MouseEvent<HTMLUListElement>) => {
    if (event.target.tagName === 'BUTTON') {
      onChange(event.target.value);
      toggleOpen();
    }
    if (event.target as HTMLButtonElement)
  };

  const optionMarkup = open ? (
    <ul className="OptionList" onClick={handleClick}>
      {options.map(renderOption)}
    </ul>
  ) : null;

  return (
    <div className="SelectWrapper">
      <button onClick={toggleOpen}>
        <div className="Select">
          <input type="text" value={value} readOnly autoComplete="off" />
          <div>
            <Icon name="arrowDown" />
          </div>
        </div>
      </button>
      {optionMarkup}
    </div>
  );
};

function renderOption(option: string) {
  return (
    <li key={option}>
      <button type="button" value={option}>
        {option}
      </button>
    </li>
  );
}
