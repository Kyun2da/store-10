import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import App from './';

export default {
  title: '레이아웃/앱(App)',
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App />;

export const Default = Template.bind({});
