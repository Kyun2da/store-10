import React, { useEffect, useState } from 'react';
import * as S from './styles';
import ShoppingCartList from '@/components/ShoppingCart/ShoppingCartList';
import ShoppingCartSummary from '@/components/ShoppingCart/ShoppingCartSummary';
import { ICart } from '@/types';
import { useGetCarts, useDeleteCart } from '@/hooks/queries/cart';

const ShoppingCart = () => {
  const { status, data } = useGetCarts();
  const { mutate } = useDeleteCart();
  const [unCheckedList, setUnCheckedList] = useState<number[]>([]);

  const [shoppingCartItems, setShoppingCartItems] = useState<ICart[]>([]);

  useEffect(() => {
    if (data) {
      setShoppingCartItems(data);
    }
  }, [data]);

  const checkedItems = shoppingCartItems.filter(
    (item) =>
      !unCheckedList.find((uncheckedId) => item.productId === uncheckedId)
  );
  const productCount = checkedItems.length;
  const totalPrice = checkedItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  const removeFromCart = (ids: number[]) => {
    const checkNotRemovedItems = (item: ICart) => !ids.includes(item.productId);
    setShoppingCartItems(shoppingCartItems.filter(checkNotRemovedItems));
    mutate(ids);
  };

  if (status === 'loading') {
    return <div>로딩</div>;
  }

  return (
    <S.ShoppingCart className="container">
      <ShoppingCartList
        shoppingCartItems={shoppingCartItems}
        checkedItems={checkedItems}
        setShoppingCartItems={setShoppingCartItems}
        setUnCheckedList={setUnCheckedList}
        unCheckedList={unCheckedList}
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
