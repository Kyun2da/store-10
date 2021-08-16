import React, { FC, Dispatch } from 'react';
import Checkbox from '@/components/Shared/Checkbox';
import ShoppingCartItem from '@/components/ShoppingCart/ShopingCartItem';
import { shoppingCartItem } from '@/types';
import * as S from './styles';

interface IShoppingCartListProps {
  shoppingCartItems: shoppingCartItem[];
  checkedItems: shoppingCartItem[];
  setShoppingCartItems: Dispatch<shoppingCartItem[]>;
  removeFromCart: (ids: number[]) => void;
}

const ShoppingCartList: FC<IShoppingCartListProps> = ({
  shoppingCartItems,
  setShoppingCartItems,
  removeFromCart,
  checkedItems,
}) => {
  const setProductState = (index: number, state: Record<string, unknown>) => {
    shoppingCartItems.splice(index, 1, {
      ...shoppingCartItems[index],
      ...state,
    });

    setShoppingCartItems([...shoppingCartItems]);
  };

  const isAllchecked =
    !!shoppingCartItems.length &&
    shoppingCartItems.every((item) => item.isChekced);

  const onChangeAllCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const shouldAllCheck = e.target.checked;
    const newItems = shoppingCartItems.map((item) => ({
      ...item,
      isChekced: shouldAllCheck,
    }));

    setShoppingCartItems([...newItems]);
  };

  const onClickRemoveSelectedItems = () => {
    const checkedIds = checkedItems.map((item) => item.id);
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
            key={item.id}
            item={item}
            index={index}
            setProductState={setProductState}
            removeFromCart={removeFromCart}
          />
        ))}
      </S.ShoppingCartList>
    </div>
  );
};

export default ShoppingCartList;
