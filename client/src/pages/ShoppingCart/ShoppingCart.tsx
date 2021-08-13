import React, { useState } from 'react';
import * as S from './styles';
import ShoppingCartList from '@/components/ShoppingCart/ShoppingCartList';
import ShoppingCartSummary from '@/components/ShoppingCart/ShoppingCartSummary';
import shoppingCart from '@/dummies/shoppingCart';
import { shoppingCartItem } from '@/types';

const ShoppingCart = () => {
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

  const removeFromCart = (ids: number[]) => {
    const filteredItems = shoppingCartItems.filter(
      (item) => !ids.includes(item.id)
    );

    setShoppingCartItems(filteredItems);
  };

  return (
    <S.ShoppingCart className="container">
      <ShoppingCartList
        shoppingCartItems={shoppingCartItems}
        checkedItems={checkedItems}
        setShoppingCartItems={setShoppingCartItems}
        removeFromCart={removeFromCart}
      />
      <S.ShoppingCartAside>
        <ShoppingCartSummary
          productCount={productCount}
          totalPrice={totalPrice}
        />
      </S.ShoppingCartAside>
      <S.ShoppingCartFooter>
        <ShoppingCartSummary
          productCount={productCount}
          totalPrice={totalPrice}
        />
      </S.ShoppingCartFooter>
    </S.ShoppingCart>
  );
};

export default ShoppingCart;
