import React from 'react';
import { Dropdown } from './Dropdown';
import type { DropdownProps } from './Dropdown';
import { ComponentMeta } from '@storybook/react';

export default {
  title: 'Element/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

export const 기본드랍다운 = () => {
  const options = [
    { label: 'Today', value: 'today' },
    { label: 'Yesterday', value: 'yesterday' },
    { label: 'Last 7 days', value: 'lastWeek' },
  ];
  return (
    <div>
      <Dropdown label="Basic Dropdown" options={options} />
    </div>
  );
};
