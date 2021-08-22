import React from 'react';
import * as S from './styles';
import OrderSummary from '@/components/Order/OrderSummary';
import Title from '@/components/Shared/Title';
import OrderAddress from '@/components/Order/OrderAddress';
import OrderProducts from '@/components/Order/OrderProducts';
import OrderCoupon from '@/components/Order/OrderCoupon';
import OrderPayment from '@/components/Order/OrderPayment';
import { useParams } from '@/lib/Router';
import { useGetOrder } from '@/hooks/queries/order';

const Order = () => {
  const { id } = useParams().params;
  const { data, isLoading } = useGetOrder(+id);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }
  return (
    <S.OrderContainer className="container">
      <S.Order>
        <S.OrderHeader>
          <Title level={4}>주문/결제</Title>
        </S.OrderHeader>
        <OrderAddress />
        <OrderProducts products={data?.products} />
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
