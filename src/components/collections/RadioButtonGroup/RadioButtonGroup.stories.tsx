import React from 'react';
import { RadioButtonGroup } from './RadioButtonGroup';
import type { RadioButtonGroupProps } from './RadioButtonGroup';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RadioButtonOption } from '../../controls/RadioButton';

export default {
  title: 'Collections/RadioButtonGroup',
  component: RadioButtonGroup,
} as ComponentMeta<typeof RadioButtonGroup>;

export const Basic = () => {
  const [options, setOptions] = React.useState<RadioButtonOption[]>([
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
  ]);
  const [selected, setSelected] = React.useState('react');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };

  return (
    <div>
      <RadioButtonGroup
        options={options}
        value={selected}
        onChange={handleChange}
      />
    </div>
  );
};
