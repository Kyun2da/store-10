import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RatingSetter from './RatingSetter';

export default {
  title: '컴포넌트/공통/별점평가',
  component: RatingSetter,
} as ComponentMeta<typeof RatingSetter>;

const Template: ComponentStory<typeof RatingSetter> = () => <RatingSetter />;

export const Default = Template.bind({});
Default.args = {
  rating: 4.3,
  uniqueId: 'thisisuniqueId',
};
