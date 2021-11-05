import React from 'react';
import { ButtonGroup } from './ButtonGroup';
import { ComponentMeta } from '@storybook/react';
import { Button } from '../../elements';

export default {
  title: 'Collections/ButtonGroup',
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

export const Default = () => {
  return (
    <ButtonGroup>
      <Button>Button A</Button>
      <Button>Button B</Button>
      <Button>Button C</Button>
      <Button>Button D</Button>
      <Button>Button F</Button>
      <Button>Button G</Button>
    </ButtonGroup>
  );
};
