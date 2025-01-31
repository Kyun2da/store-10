import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import shoppingCart from '@/dummies/shoppingCart';
import { shoppingCartItem } from '@/types';
import ShoppingCartSummary from '.';

export default {
  title: '컴포넌트/장바구니 결제 정보',
  component: ShoppingCartSummary,
} as ComponentMeta<typeof ShoppingCartSummary>;

const initialItems = shoppingCart.map((item) => ({
  ...item,
  isChekced: true,
}));

const [shoppingCartItems, setShoppingCartItems] =
  useState<shoppingCartItem[]>(initialItems);

const checkedItems = shoppingCartItems.filter((item) => item.isChekced);
const productCount = checkedItems.length;
const totalPrice = checkedItems.reduce(
  (sum, item) => sum + item.price * item.count,
  0
);

const Template: ComponentStory<typeof ShoppingCartSummary> = () => (
  <ShoppingCartSummary productCount={productCount} totalPrice={totalPrice} />
);

export const Default = Template.bind({});
