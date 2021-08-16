import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Addresses from '.';

export default {
  title: '컴포넌트/배송지 관리',
  component: Addresses,
} as ComponentMeta<typeof Addresses>;

const Template: ComponentStory<typeof Addresses> = () => <Addresses />;

export const Default = Template.bind({});
