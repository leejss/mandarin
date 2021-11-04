import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Icon } from './Icon';

export default {
  title: 'Common/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const IconDictionanry = () => {
  return (
    <div>
      <Icon name="spinner" />
      <Icon name="search" />
      <Icon name="close" />
      <Icon name="circle" />
      <Icon name="arrowDown" />
    </div>
  );
};
