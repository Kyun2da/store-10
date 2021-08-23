import React, { useState, useEffect } from 'react';
import Chip from '@/components/Shared/Chip';
import Title from '@/components/Shared/Title';
import Pagination from '@/components/Shared/Pagination';
import * as S from './styles';
import { FRUSTRATE_IMG, ORDER_STATUS_DATA } from '@/contstants';
import OrderItemList from './OrderItemList';
import { useGetOrders } from '@/hooks/queries/order';
import { IOrder } from '@/types';

const PERIOD_FILTER = [
  { name: '1개월 전', value: 1 },
  { name: '3개월 전', value: 3 },
  { name: '6개월 전', value: 6 },
  { name: '1년 전', value: 12 },
  { name: '2년 전', value: 24 },
];

const PAGE_LIMIT = 4;

const OrderHistory = ({}) => {
  const [selectedPeriod, setSelectedPeriod] = useState<number>(1);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [page, setPage] = useState<number>(0);
  const { data } = useGetOrders(selectedPeriod);

  useEffect(() => {
    if (selectedStatus) {
      const filteredOrders =
        data?.filter((order) => order.status === selectedStatus) || [];
      setOrders(filteredOrders);
    } else {
      setOrders(data || []);
    }
    setPage(0);
  }, [data, selectedStatus]);

  const onClickPage = (page: number) => {
    setPage(page);
  };

  const renderOrderItemList = () => {
    const offset = page * PAGE_LIMIT;
    const ordersOnPage = orders.slice(offset, offset + PAGE_LIMIT);
    return ordersOnPage.map((order) => (
      <S.OrderHistoryBody key={order.id}>
        <OrderItemList
          date={order.createdAt}
          items={order.products}
          status={order.status}
          deliveredAt={order.deliveredAt}
        />
      </S.OrderHistoryBody>
    ));
  };

  const renderPeriodFilter = () => {
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
    return ORDER_STATUS_DATA.map((status) => {
      const isSelected = status.value === selectedStatus;
      const count =
        data?.filter((order) => order.status === status.value)?.length || 0;
      return (
        <S.OrderStatusWrapper key={status.value}>
          <S.OrderStatusName>{status.name}</S.OrderStatusName>
          <S.OrderStatus
            isSelected={isSelected}
            onClick={() => setSelectedStatus(isSelected ? null : status.value)}
          >
            {count}
          </S.OrderStatus>
        </S.OrderStatusWrapper>
      );
    });
  };

  return (
    <S.OrerHistory>
      <S.OrderHistoryHeader>
        <S.OrderPeriodWrapper>
          <Title level={5}>조회 기간:</Title> {renderPeriodFilter()}
        </S.OrderPeriodWrapper>
        <S.OrderStatusContainer>
          {renderOrderStatuList()}
        </S.OrderStatusContainer>
      </S.OrderHistoryHeader>
      <S.OrderHistoryBody>
        {data?.length && renderOrderItemList()}
        {data && !data.length && (
          <S.EmptyWrapper>
            <img src={FRUSTRATE_IMG} />
            <Title level={4}>주문 내역이 없습니다...!</Title>
          </S.EmptyWrapper>
        )}
      </S.OrderHistoryBody>

      <Pagination
        handleOnClickPage={onClickPage}
        count={Math.ceil(orders.length / PAGE_LIMIT)}
      />
    </S.OrerHistory>
  );
};

export default OrderHistory;
