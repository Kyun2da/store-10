import React, { Dispatch } from 'react';
import * as S from './styles';
import { MinusSVG, PlusSVG, CloseSVG } from '@/assets/svgs';
import { wonFormat } from '@/utils/helper';
import Checkbox from '@/components/Shared/Checkbox';
import { ICart } from '@/types';
import { useHistory } from '@/lib/Router';
import { DeleteConfirmModal } from '@/components/Shared/Modal';
import useModal from '@/hooks/useModal';

interface IShoppingCartItemProps {
  item: ICart;
  index: number;
  setProductState: (index: number, state: Record<string, unknown>) => void;
  removeFromCart: (ids: number[]) => void;
  setUnCheckedList: Dispatch<number[]>;
  unCheckedList: number[];
}
const ShoppingCartItem = ({
  item,
  index,
  setProductState,
  removeFromCart,
  setUnCheckedList,
  unCheckedList,
}: IShoppingCartItemProps) => {
  const { historyPush } = useHistory();
  const [modalOpen, toggleModal] = useModal(false);

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
    if (e.target.checked) {
      setUnCheckedList(
        unCheckedList.filter((unChekcedId) => unChekcedId !== item.productId)
      );
    } else {
      setUnCheckedList([...unCheckedList, item.productId]);
    }
  };

  const onClickProductPage = () => {
    historyPush(`/detail/${item.productId}`);
  };

  const onClickRemove = () => {
    removeFromCart([item.productId]);
    toggleModal();
  };
  const isUnCehcked = !!unCheckedList.find(
    (uncheckedId) => uncheckedId === item.productId
  );

  return (
    <S.ShoppingCartItem>
      <Checkbox checked={!isUnCehcked} onChange={onChangeCheckbox} />
      <S.ImgWrapper>
        <img src={item.image} onClick={onClickProductPage} />
      </S.ImgWrapper>
      <S.ItemInfo onClick={onClickProductPage}>
        <S.ItemInfoName>{item.title}</S.ItemInfoName>
        <S.ItemInfoPrice>{wonFormat(+item.price)}</S.ItemInfoPrice>
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

      <S.CloseButton onClick={toggleModal}>
        <CloseSVG stroke="black" width={22} height={22} strokeWidth="0.2rem" />
      </S.CloseButton>
      {modalOpen && (
        <DeleteConfirmModal
          toggleModal={toggleModal}
          removeSelected={onClickRemove}
        />
      )}
    </S.ShoppingCartItem>
  );
};

export default ShoppingCartItem;
