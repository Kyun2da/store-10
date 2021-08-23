import React from 'react';
import * as S from './styles';
import { wonFormat } from '@/utils/helper';
import Button from '@/components/Shared/Button';
import Title from '@/components/Shared/Title';

interface IProps {
  totalPrice: number;
  deliveryFee?: number;
  discount?: number;
  productCount: number;
}

const OrderSummary = ({
  totalPrice,
  deliveryFee = 0,
  discount = 0,
  productCount,
}: IProps) => {
  const sum = totalPrice + deliveryFee - discount;
  return (
    <S.OrderSummaryWrapper>
      <S.OrderSummary>
        <Title level={5}>결제 금액</Title>
        <S.OrderSummaryRow>
          <dt>총 상품금액</dt>
          <dd>{wonFormat(totalPrice)}</dd>
        </S.OrderSummaryRow>
        <S.OrderSummaryRow>
          <dt>총 배송비</dt>
          <dd>
            {deliveryFee > 0 ? '+' : ''} {wonFormat(deliveryFee)}
          </dd>
        </S.OrderSummaryRow>
        <S.OrderSummaryRow>
          <dt>쿠폰 사용</dt>
          <dd>
            {discount > 0 ? '-' : ''} {wonFormat(discount)}
          </dd>
        </S.OrderSummaryRow>
        <S.Divider />
        <S.OrderSummaryRow>
          <dt>최종 결제 금액</dt>
          <dd>{wonFormat(sum)}</dd>
        </S.OrderSummaryRow>
      </S.OrderSummary>
      <Button type="button" color="primary" onClick={() => {}}>
        {productCount}개 상품 구매하기
      </Button>
    </S.OrderSummaryWrapper>
  );
};

export default OrderSummary;
