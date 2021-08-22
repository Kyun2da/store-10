import React from 'react';
import * as S from './styles';
import OrderSummary from '@/components/Order/OrderSummary';
import Title from '@/components/Shared/Title';
import OrderAddress from '@/components/Order/OrderAddress';
import OrderProducts from '@/components/Order/OrderProducts';
import OrderCoupon from '@/components/Order/OrderCoupon';
import OrderPayment from '@/components/Order/OrderPayment';

const Order = () => {
  return (
    <S.OrderContainer className="container">
      <S.Order>
        <S.OrderHeader>
          <Title level={4}>주문/결제</Title>
        </S.OrderHeader>
        <OrderAddress />
        <OrderProducts />
        <OrderCoupon />
        <OrderPayment />
      </S.Order>
      <S.OrderAside>
        <OrderSummary
          totalPrice={10000}
          deliveryFee={2500}
          discount={0}
          productCount={3}
        />
      </S.OrderAside>
      <S.OrderFooter>
        <OrderSummary
          totalPrice={10000}
          deliveryFee={2500}
          discount={0}
          productCount={3}
        />
      </S.OrderFooter>
    </S.OrderContainer>
  );
};

export default Order;
