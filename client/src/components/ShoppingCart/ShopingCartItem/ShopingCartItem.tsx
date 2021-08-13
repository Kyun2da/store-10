import React, { ChangeEvent, FC } from 'react';
import * as S from './styles';
import { MinusSVG, PlusSVG, CloseSVG } from '@/assets/svgs';
import { wonFormat } from '@/helper';
import Checkbox from '@/components/Checkbox';
import { shoppingCartItem } from '@/types';

interface IShoppingCartItemProps {
  item: shoppingCartItem;
  index: number;
  setProductState: (index: number, state: Record<string, unknown>) => void;
  removeFromCart: (ids: number[]) => void;
}
const ShoppingCartItem: FC<IShoppingCartItemProps> = ({
  item,
  index,
  setProductState,
  removeFromCart,
}) => {
  const onClickPlus = () => {
    setProductState(index, { count: item.count + 1 });
  };

  const onClickMinus = () => {
    if (item.count <= 1) {
      return;
    }
    setProductState(index, { count: item.count - 1 });
  };

  const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductState(index, { isChekced: e.target.checked });
  };

  const onClickClose = () => {
    removeFromCart([item.id]);
  };

  return (
    <S.ShoppingCartItem>
      <Checkbox checked={item.isChekced} onChange={onChangeCheckbox} />
      <S.ImgWrapper>
        <img src="https://store-10.s3.ap-northeast-2.amazonaws.com/test/test.jpeg" />
      </S.ImgWrapper>
      <S.ItemInfo>
        <S.ItemInfoName>{item.title}</S.ItemInfoName>
        <S.ItemInfoPrice>{wonFormat(item.price)}</S.ItemInfoPrice>
      </S.ItemInfo>
      <S.TotalPrice>
        <div>
          <button onClick={onClickMinus}>
            <MinusSVG stroke="#fcfcfc" />
          </button>
          <span>{item.count}</span>
          <button onClick={onClickPlus}>
            <PlusSVG fill="#fcfcfc" />
          </button>
        </div>
        <span>{wonFormat(item.count * item.price)}</span>
      </S.TotalPrice>

      <S.CloseButton onClick={onClickClose}>
        <CloseSVG stroke="black" width={22} height={22} strokeWidth="0.2rem" />
      </S.CloseButton>
    </S.ShoppingCartItem>
  );
};

export default ShoppingCartItem;
