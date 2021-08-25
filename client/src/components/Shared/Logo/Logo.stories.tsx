import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Logo from './Logo';

export default {
  title: '컴포넌트/공통/로고',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = () => <Logo />;

export const Default = Template.bind({});
