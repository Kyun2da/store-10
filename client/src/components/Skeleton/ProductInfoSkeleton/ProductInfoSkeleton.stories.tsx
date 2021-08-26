import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductInfoSkeleton from './ProductInfoSkeleton';

export default {
  title: '컴포넌트/스켈레톤/상품상세',
  component: ProductInfoSkeleton,
} as ComponentMeta<typeof ProductInfoSkeleton>;

const Template: ComponentStory<typeof ProductInfoSkeleton> = () => (
  <ProductInfoSkeleton />
);

export const Default = Template.bind({});
