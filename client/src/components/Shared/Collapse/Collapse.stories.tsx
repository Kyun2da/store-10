import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Collapse from './Collapse';

export default {
  title: '컴포넌트/공통/콜랍스',
  component: Collapse,
} as ComponentMeta<typeof Collapse>;

const Template: ComponentStory<typeof Collapse> = (args) => (
  <Collapse {...args} />
);

export const Default = Template.bind({});
