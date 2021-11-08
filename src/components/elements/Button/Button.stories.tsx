import React from 'react';
import { Button } from './Button';
import { ComponentMeta } from '@storybook/react';
import { Stack } from '../../layouts/Stack';

export default {
  title: 'Element/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Contained = () => {
  return (
    <Stack vertical gutter={10}>
      <Button>Primary Button</Button>
      <Button color="secondary">Secondary Button</Button>
      <Button color="ok">Ok Button</Button>
      <Button color="danger">Danger Button</Button>
      <Button color="warning">Warning Button</Button>
    </Stack>
  );
};

export const Outlined = () => {
  return (
    <Stack vertical gutter={10}>
      <Button variant="outlined">Primary</Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" color="ok">
        Ok
      </Button>
      <Button variant="outlined" color="danger">
        Danger
      </Button>
      <Button variant="outlined" color="warning">
        Warning
      </Button>
    </Stack>
  );
};

export const 사이즈 = () => {
  return (
    <Stack vertical gutter={10}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
      <Button fullWidth>Full Width</Button>
    </Stack>
  );
};

export const 살다버튼 = () => {
  return (
    <div
      style={{
        width: '328px',
      }}
    >
      <Button fullWidth>버튼</Button>
    </div>
  );
};
