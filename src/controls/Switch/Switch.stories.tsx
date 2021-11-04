import React from 'react';
import { Switch } from './Switch';
import type { SwitchProps } from './Switch';
import { ComponentMeta } from '@storybook/react';

export default {
  title: 'Controls/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const Basic = () => {
  return <Switch />;
};
export const Disabled = () => {
  return <Switch disabled />;
};
