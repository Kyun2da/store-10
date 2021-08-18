import React, { useState } from 'react';
import Chip from '@/components/Shared/Chip';
import * as S from './styles';
import orderHistory, { orderItemList } from '@/dummies/orderHistory';
import { FRUSTRATE_IMG } from '@/contstants';
import Title from '@/components/Shared/Title';
import OrderItemList from './OrderItemList';

const PERIOD_FILTER = [
  { name: '최근 1개월 전', value: 1 },
  { name: '3개월 전', value: 3 },
  { name: '6개월 전', value: 6 },
  { name: '2021', value: 12 },
  { name: '2020', value: 24 },
];

const OrderHistory = ({}) => {
  const [selectedPeriod, setSelectedPeriod] = useState<number>(1);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const orderItems = Object.entries(orderItemList);
  const renderOrderItemList = () => {
    return orderItems.map(([key, value]) => (
      <S.OrderHistoryBody key={key}>
        <OrderItemList
          date={key}
          items={value.items}
          status={value.status}
          deliveredAt={value.deliveredAt}
        />
      </S.OrderHistoryBody>
    ));
  };

  const renderPeriodList = () => {
    return PERIOD_FILTER.map((period) => (
      <Chip
        key={period.value}
        className={period.value === selectedPeriod ? 'selected' : undefined}
        onClick={() => setSelectedPeriod(period.value)}
      >
        {period.name}
      </Chip>
    ));
  };

  const renderOrderStatuList = () => {
    return orderHistory.map((order) => {
      const isSelected = order.value === selectedStatus;
      return (
        <S.OrderStatusWrapper key={order.value}>
          <S.OrderStatusName>{order.name}</S.OrderStatusName>
          <S.OrderStatus
            isSelected={isSelected}
            onClick={() => setSelectedStatus(isSelected ? null : order.value)}
          >
            {order.count}
          </S.OrderStatus>
        </S.OrderStatusWrapper>
      );
    });
  };

  return (
    <S.OrerHistory>
      <S.OrderHistoryHeader>
        <S.OrderPeriodWrapper>
          <Title level={5}>조회 기간:</Title> {renderPeriodList()}
        </S.OrderPeriodWrapper>
        <S.OrderStatusContainer>
          {renderOrderStatuList()}
        </S.OrderStatusContainer>
      </S.OrderHistoryHeader>

      {orderItems.length ? (
        <S.OrderHistoryBody>{renderOrderItemList()}</S.OrderHistoryBody>
      ) : (
        <S.OrderHistoryBody>
          <S.EmptyWrapper>
            <img src={FRUSTRATE_IMG} />
            <Title level={4}>주문 내역이 없습니다...!</Title>
          </S.EmptyWrapper>
        </S.OrderHistoryBody>
      )}
    </S.OrerHistory>
  );
};

export default OrderHistory;
