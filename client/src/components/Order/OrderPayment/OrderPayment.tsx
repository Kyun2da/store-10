import React, { useState } from 'react';
import * as S from './styles';
interface IProps {}

const OrderPayment = ({}: IProps) => {
  return (
    <article>
      <S.OrderPaymentHeader>
        <span>결제수단</span>
      </S.OrderPaymentHeader>
    </article>
  );
};

export default OrderPayment;
