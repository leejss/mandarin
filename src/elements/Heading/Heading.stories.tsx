import React from 'react';
import { Heading } from './Heading';
import type { HeadingProps } from './Heading';
import { ComponentMeta, Story } from '@storybook/react';

export default {
  title: 'Element/Heading',
  component: Heading,
  args: {
    children: 'Typography',
  },
} as ComponentMeta<typeof Heading>;

const Template: Story<HeadingProps> = ({ children, ...args }) => (
  <Heading {...args}>{children}</Heading>
);

export const 템플릿 = Template.bind({});
템플릿.args = {
  element: 'h1',
};
