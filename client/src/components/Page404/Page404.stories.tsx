import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Page404 from './';

export default {
  title: '컴포넌트/404페이지',
  component: Page404,
} as ComponentMeta<typeof Page404>;

const Template: ComponentStory<typeof Page404> = () => <Page404 />;

export const Default = Template.bind({});
