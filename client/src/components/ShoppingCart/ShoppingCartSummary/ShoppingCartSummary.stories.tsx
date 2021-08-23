import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import shoppingCart from '@/dummies/shoppingCart';
import { ICart } from '@/types';
import ShoppingCartSummary from '.';

export default {
  title: '컴포넌트/장바구니 결제 정보',
  component: ShoppingCartSummary,
} as ComponentMeta<typeof ShoppingCartSummary>;

const Template: ComponentStory<typeof ShoppingCartSummary> = () => {
  const [shoppingCartItems] = useState<ICart[]>(shoppingCart);
  const [unCheckedList, setUnCheckedList] = useState<number[]>([]);
  const checkedItems = shoppingCartItems.filter(
    (item) =>
      !unCheckedList.find((uncheckedId) => item.productId === uncheckedId)
  );

  const productCount = checkedItems.length;
  const totalPrice = checkedItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  return (
    <ShoppingCartSummary
      productCount={productCount}
      totalPrice={totalPrice}
      disabled={false}
      checkedItems={checkedItems}
    />
  );
};

export const Default = Template.bind({});
