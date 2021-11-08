import React from 'react';
import { Select } from './Select';
import { ComponentMeta } from '@storybook/react';

export default {
  title: 'Element/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

export const 기본 = () => {
  const [value, setValue] = React.useState('small');
  const [options, setOptions] = React.useState(['small', 'medium', 'large']);

  const handleChange = (option) => {
    setValue(option);
  };

  return <Select value={value} options={options} onChange={handleChange} />;
};
