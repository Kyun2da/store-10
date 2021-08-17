import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CategorySelector from './';

export default {
  title: '컴포넌트/카드',
  component: CategorySelector,
} as ComponentMeta<typeof CategorySelector>;

const Template: ComponentStory<typeof CategorySelector> = () => (
  <CategorySelector />
);
export const Default = Template.bind({});
