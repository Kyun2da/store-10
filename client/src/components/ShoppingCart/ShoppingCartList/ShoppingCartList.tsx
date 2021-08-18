import React, { Dispatch } from 'react';
import Checkbox from '@/components/Shared/Checkbox';
import ShoppingCartItem from '@/components/ShoppingCart/ShopingCartItem';
import { ICart } from '@/types';
import * as S from './styles';

interface IShoppingCartListProps {
  shoppingCartItems: ICart[];
  checkedItems: ICart[];
  setShoppingCartItems: Dispatch<ICart[]>;
  removeFromCart: (ids: number[]) => void;
  setUnCheckedList: Dispatch<number[]>;
  unCheckedList: number[];
}

const ShoppingCartList = ({
  shoppingCartItems,
  setShoppingCartItems,
  removeFromCart,
  checkedItems,
  setUnCheckedList,
  unCheckedList,
}: IShoppingCartListProps) => {
  const setProductState = (index: number, state: Record<string, unknown>) => {
    shoppingCartItems.splice(index, 1, {
      ...shoppingCartItems[index],
      ...state,
    });

    setShoppingCartItems([...shoppingCartItems]);
  };

  const isAllchecked = checkedItems.length === shoppingCartItems.length;

  const onChangeAllCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const shouldAllCheck = e.target.checked;
    if (shouldAllCheck) {
      setUnCheckedList([]);
    } else {
      setUnCheckedList(shoppingCartItems.map((item) => item.productId));
    }
  };

  const onClickRemoveSelectedItems = () => {
    const checkedIds = checkedItems.map((item) => item.productId);
    removeFromCart(checkedIds);
  };

  return (
    <div>
      <S.ShoppingCartHeader>
        <Checkbox
          onChange={onChangeAllCheck}
          checked={isAllchecked}
          label={'전체 선택'}
        />
        <button onClick={onClickRemoveSelectedItems}>선택 삭제</button>
      </S.ShoppingCartHeader>

      <S.ShoppingCartList>
        {shoppingCartItems.map((item, index) => (
          <ShoppingCartItem
            key={item.productId}
            item={item}
            index={index}
            setProductState={setProductState}
            removeFromCart={removeFromCart}
            setUnCheckedList={setUnCheckedList}
            unCheckedList={unCheckedList}
          />
        ))}
      </S.ShoppingCartList>
    </div>
  );
};

export default ShoppingCartList;
