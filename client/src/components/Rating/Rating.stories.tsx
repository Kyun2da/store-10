import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Rating from './';

export default {
  title: '컴포넌트/별점평가',
  component: Rating,
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Default = Template.bind({});
Default.args = {
  rating: 4.3,
  uniqueId: 'thisisuniqueId',
};
