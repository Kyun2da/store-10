import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RatingChart from './';

export default {
  title: '컴포넌트/별점차트',
  component: RatingChart,
} as ComponentMeta<typeof RatingChart>;

const Template: ComponentStory<typeof RatingChart> = () => <RatingChart />;

export const Default = Template.bind({});
