import React, { Suspense } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './';
import categorylist from '@/dummies/mockCateogrys';
import { RecoilRoot } from 'recoil';
import { rest } from 'msw';

const HeaderComponent = () => (
  <Suspense fallback={<div>loading</div>}>
    <RecoilRoot>
      <Header />
    </RecoilRoot>
  </Suspense>
);

export default {
  title: '컴포넌트/헤더',
  component: HeaderComponent,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <HeaderComponent />;

export const Default = Template.bind({});
Default.parameters = {
  msw: [
    rest.get('http://localhost:6006/product/category-list', (req, res, ctx) => {
      return res(ctx.json(categorylist));
    }),
  ],
};
