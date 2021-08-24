import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DeleteConfirmModal from './DeleteConfirmModal';

export default {
  title: '컴포넌트/주소입력 모달',
  component: DeleteConfirmModal,
} as ComponentMeta<typeof DeleteConfirmModal>;

const Template: ComponentStory<typeof DeleteConfirmModal> = (args) => (
  <DeleteConfirmModal {...args} />
);

export const Default = Template.bind({});
