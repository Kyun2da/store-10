import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Category from '.';

export default {
  title: '페이지/카테고리',
  component: Category,
} as ComponentMeta<typeof Category>;

const Template: ComponentStory<typeof Category> = () => <Category />;

export const Default = Template.bind({});
