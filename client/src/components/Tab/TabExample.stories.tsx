import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TabExample from './TabExample';

export default {
  title: '컴포넌트/탭예시(1)',
  component: TabExample,
} as ComponentMeta<typeof TabExample>;

const Template: ComponentStory<typeof TabExample> = () => <TabExample />;

export const Default = Template.bind({});
