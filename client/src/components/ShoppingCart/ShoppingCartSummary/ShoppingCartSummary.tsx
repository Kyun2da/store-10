import React, { useCallback } from 'react';
import * as S from './styles';
import { wonFormat } from '@/utils/helper';
import Button from '@/components/Shared/Button';
import { usePostOrder } from '@/hooks/queries/order';
import { ICart } from '@/types';

interface ISShoppingCartSummaryProps {
  totalPrice: number;
  deliveryFee?: number;
  discount?: number;
  productCount: number;
  disabled?: boolean;
  checkedItems: ICart[];
}

const ShoppingCartSummary = ({
  totalPrice,
  deliveryFee = 2500,
  discount = 0,
  productCount,
  disabled,
  checkedItems,
}: ISShoppingCartSummaryProps) => {
  const sum = totalPrice + deliveryFee - discount;
  const { mutate } = usePostOrder();
  const buyButtonOnClick = useCallback(() => {
    mutate({
      products: checkedItems.map((item) => ({
        count: item.count,
        id: item.productId,
      })),
      status: 'created',
    });
  }, [mutate, checkedItems]);

  return (
    <S.ShoppingCartSummaryWrapper>
      <S.ShoppingCartSummary>
        <S.ShoppingCartSummaryRow>
          <dt>총 상품금액</dt>
          <dd>{wonFormat(totalPrice)}</dd>
        </S.ShoppingCartSummaryRow>
        <S.ShoppingCartSummaryRow>
          <dt>총 배송비</dt>
          <dd>+ {wonFormat(deliveryFee)}</dd>
        </S.ShoppingCartSummaryRow>
        <S.ShoppingCartSummaryRow>
          <dt>총 할인금액</dt>
          <dd>
            {!!discount && '+ '}
            {wonFormat(discount)}
          </dd>
        </S.ShoppingCartSummaryRow>
        <S.ShoppingCartSummaryRow>
          <dt>결제 금액</dt>
          <dd>{wonFormat(sum)}</dd>
        </S.ShoppingCartSummaryRow>
      </S.ShoppingCartSummary>
      <Button
        type="button"
        color="primary"
        disabled={disabled}
        onClick={buyButtonOnClick}
      >
        {productCount}개 상품 구매하기
      </Button>
    </S.ShoppingCartSummaryWrapper>
  );
};

export default ShoppingCartSummary;
