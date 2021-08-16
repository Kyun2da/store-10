import React, { FC } from 'react';
import * as S from './styles';
import { wonFormat } from '@/helper';
import Button from '@/components/Shared/Button';

interface ISShoppingCartSummaryProps {
  totalPrice: number;
  deliveryFee?: number;
  discount?: number;
  productCount: number;
}

const ShoppingCartSummary: FC<ISShoppingCartSummaryProps> = ({
  totalPrice,
  deliveryFee = 0,
  discount = 0,
  productCount,
}) => {
  const sum = totalPrice + deliveryFee - discount;
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
          <dd>+ {wonFormat(discount)}</dd>
        </S.ShoppingCartSummaryRow>
        <S.ShoppingCartSummaryRow>
          <dt>결제 금액</dt>
          <dd>{wonFormat(sum)}</dd>
        </S.ShoppingCartSummaryRow>
      </S.ShoppingCartSummary>
      <Button type="button" color="primary" onClick={() => {}}>
        {productCount}개 상품 구매하기
      </Button>
    </S.ShoppingCartSummaryWrapper>
  );
};

export default ShoppingCartSummary;
