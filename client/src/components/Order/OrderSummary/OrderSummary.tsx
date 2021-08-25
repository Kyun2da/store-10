import React, { useState } from 'react';
import * as S from './styles';
import { wonFormat } from '@/utils/helper';
import Button from '@/components/Shared/Button';
import Title from '@/components/Shared/Title';
import Checkbox from '@/components/Shared/Checkbox';

interface IProps {
  totalPrice: number;
  deliveryFee: number;
  discount: number;
  productCount: number;
  updateOrder: () => void;
}

const OrderSummary = ({
  totalPrice,
  deliveryFee,
  discount,
  productCount,
  updateOrder,
}: IProps) => {
  const [agree, setAgree] = useState(false);
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
          <dd className={discount > 0 ? 'red' : undefined}>
            {discount > 0 ? '-' : ''} {wonFormat(discount)}
          </dd>
        </S.OrderSummaryRow>
        <S.Divider />
        <S.OrderSummaryRow>
          <dt>최종 결제 금액</dt>
          <dd>{wonFormat(sum)}</dd>
        </S.OrderSummaryRow>
        <S.Divider />
        <S.OrderSummaryFooter>
          <Checkbox
            label="아래 내용에 모두 동의합니다. (필수)"
            checked={agree}
            onChange={(e) => setAgree(e.currentTarget.checked)}
          />
          <S.OrderAgreementWrapper>
            <S.OrderAgreement>
              · 본인은 만 14세 이상이며, 주문 내용을 확인하였습니다.
            </S.OrderAgreement>
            <S.OrderAgreement>
              · 사실, 개인정보를 수집 및 이용하는 법을 모릅니다.
            </S.OrderAgreement>
          </S.OrderAgreementWrapper>
        </S.OrderSummaryFooter>
      </S.OrderSummary>
      <Button
        type="button"
        disabled={!agree}
        color="primary"
        onClick={() => {
          updateOrder();
        }}
      >
        {productCount}개 상품 구매하기
      </Button>
    </S.OrderSummaryWrapper>
  );
};

export default OrderSummary;
