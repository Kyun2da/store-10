import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './';

export default {
  title: '컴포넌트/카드',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  bgColor: 'primary',
};

export const Another = Template.bind({});
Another.args = {
  bgColor: 'error',
};

export const Discount50 = Template.bind({});
Discount50.args = {
  bgColor: 'primary',
  discount: 50,
};

export const Discount25 = Template.bind({});
Discount50.args = {
  bgColor: 'primary',
  discount: 25,
};
