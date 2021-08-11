import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Table from '.';

export default {
  title: '컴포넌트/헤더',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = () => (
  <Table headers={[]} items={[]} />
);

export const Default = Template.bind({});
