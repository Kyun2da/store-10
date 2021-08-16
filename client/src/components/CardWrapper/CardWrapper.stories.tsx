import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardWrapper from './';
import { Default as Card } from '../Card/Card.stories';

export default {
  title: '컴포넌트/카드래퍼',
  component: CardWrapper,
} as ComponentMeta<typeof CardWrapper>;

const Template: ComponentStory<typeof CardWrapper> = (args) => (
  <CardWrapper {...args} />
);

export const Default = Template.bind({});
Default.args = {
  col: 3,
  children: [
    <Card bgColor="primary" key="1" />,
    <Card bgColor="primary" key="2" />,
    <Card bgColor="primary" key="3" />,
    <Card bgColor="primary" key="4" />,
    <Card bgColor="primary" key="5" />,
  ],
};

export const Col4 = Template.bind({});
Col4.args = {
  col: 4,
  children: [
    <Card bgColor="error" key="1" />,
    <Card bgColor="error" key="2" />,
    <Card bgColor="error" key="3" />,
    <Card bgColor="error" key="4" />,
    <Card bgColor="error" key="5" />,
  ],
};
