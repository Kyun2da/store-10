import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyPageAside from '.';

export default {
  title: '페이지/메인',
  component: MyPageAside,
} as ComponentMeta<typeof MyPageAside>;

const Template: ComponentStory<typeof MyPageAside> = (args) => (
  <MyPageAside {...args} />
);

export const Default = Template.bind({});
