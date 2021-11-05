import React from 'react';
import { Input } from './Input';
import { ComponentMeta } from '@storybook/react';
import { Icon } from '../../common';
import { Stack } from '../../layouts';

export default {
  title: 'Element/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const 기본 = () => {
  return (
    <Stack vertical gutter={10}>
      <Input />
      <Input ok />
      <Input danger />
    </Stack>
  );
};

export const 검색 = () => {
  const [value, setValue] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const clear = () => {
    setValue('');
  };
  const search = () => {
    alert(`You searched: ${value}`);
  };
  return (
    <div
      style={{
        width: '280px',
      }}
    >
      <Input
        leftIcon={<Icon name="search" onClick={search} />}
        rightIcon={<Icon name="close" onClick={clear} />}
        placeholder="검색어를 입력하세요"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
