import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import shoppingCart from '@/dummies/shoppingCart';
import ShoppingCategoryList from '.';
import { shoppingCartItem } from '@/types';

export default {
  title: '컴포넌트/장바구니 리스트',
  component: ShoppingCategoryList,
} as ComponentMeta<typeof ShoppingCategoryList>;

const initialItems = shoppingCart.map((item) => ({
  ...item,
  isChekced: true,
}));

const Template: ComponentStory<typeof ShoppingCategoryList> = () => {
  const [shoppingCartItems, setShoppingCartItems] =
    useState<shoppingCartItem[]>(initialItems);

  const checkedItems = shoppingCartItems.filter((item) => item.isChekced);

  const removeFromCart = (ids: number[]) => {
    const filteredItems = shoppingCartItems.filter(
      (item) => !ids.includes(item.id)
    );

    setShoppingCartItems(filteredItems);
  };

  return (
    <ShoppingCategoryList
      shoppingCartItems={shoppingCartItems}
      checkedItems={checkedItems}
      setShoppingCartItems={setShoppingCartItems}
      removeFromCart={removeFromCart}
    />
  );
};

export const Default = Template.bind({});
