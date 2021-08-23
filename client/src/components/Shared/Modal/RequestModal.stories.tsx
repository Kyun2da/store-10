import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RequestModal from './RequestModal';

export default {
  title: '컴포넌트/공통/문의모달 - RequestModal',
  component: RequestModal,
} as ComponentMeta<typeof RequestModal>;

const Template: ComponentStory<typeof RequestModal> = (args) => (
  <RequestModal {...args} />
);

export const Default = Template.bind({});
