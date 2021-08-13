import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PolicyModal from './PolicyModal';

export default {
  title: '컴포넌트/약관모달',
  component: PolicyModal,
} as ComponentMeta<typeof PolicyModal>;

const Template: ComponentStory<typeof PolicyModal> = (args) => (
  <PolicyModal {...args} />
);

export const Default = Template.bind({});
