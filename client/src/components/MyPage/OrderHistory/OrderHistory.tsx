import React, { useState, useEffect, useRef } from 'react';
import Chip from '@/components/Shared/Chip';
import Title from '@/components/Shared/Title';
import Pagination from '@/components/Shared/Pagination';
import * as S from './styles';
import { ORDER_STATUS_DATA, PERIOD_FILTER } from '@/contstants';
import OrderItemList from './OrderItemList';
import { useGetOrders } from '@/hooks/queries/order';
import usePagination from '@/hooks/usePagination';
import { IOrder } from '@/types';
import Thung from '@/components/Thung';
import { PAGE_LIMIT } from '@/utils/constant/offsetLimit';
import useModal from '@/hooks/useModal';
import { RequestModal, ReviewModal } from '@/components/Shared/Modal';

const OrderHistory = ({}) => {
  const topRef = useRef<HTMLDivElement>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<number | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [offset, handleOnClickPage] = usePagination(PAGE_LIMIT, topRef);
  const [isOpenReviewModal, toggleReviewModal] = useModal(false);
  const [isOpenQuestionModal, toggleQuestionModal] = useModal(false);
  const [seletedReview, setSelectedReview] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const { data } = useGetOrders(selectedPeriod);

  useEffect(() => {
    if (selectedStatus) {
      const filteredOrders =
        data?.filter((order) => order.status === selectedStatus) || [];
      setOrders(filteredOrders);
    } else {
      setOrders(data || []);
    }
    handleOnClickPage(0, true);
  }, [data, selectedStatus, handleOnClickPage]);

  const handleOnClickItemReview = (target: number) => {
    setSelectedReview(target);
    toggleReviewModal();
  };

  const handleOnClickItemQuestion = (target: number) => {
    setSelectedQuestion(target);
    toggleQuestionModal();
  };

  const renderOrderItemList = () => {
    const ordersOnPage = orders.slice(offset, offset + PAGE_LIMIT);
    return ordersOnPage.map((order) => (
      <S.OrderHistoryBody key={order.id}>
        <OrderItemList
          date={order.createdAt}
          items={order.products}
          status={order.status}
          deliveredAt={order.deliveredAt}
          clickOnReviewListener={handleOnClickItemReview}
          clickOnQuestionListener={handleOnClickItemQuestion}
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
    <S.OrerHistory ref={topRef} className="pagination-scroll-top">
      <S.OrderHistoryHeader>
        <S.OrderPeriodWrapper>
          <Title level={5}>조회 기간:</Title> {renderPeriodFilter()}
        </S.OrderPeriodWrapper>
        <S.OrderStatusContainer>
          {renderOrderStatuList()}
        </S.OrderStatusContainer>
      </S.OrderHistoryHeader>
      <S.OrderHistoryBody>
        {!!data?.length && renderOrderItemList()}
        {data && !orders.length && <Thung title="" />}
      </S.OrderHistoryBody>

      <Pagination
        handleOnClickPage={handleOnClickPage}
        count={Math.ceil(orders.length / PAGE_LIMIT)}
      />

      {isOpenReviewModal && (
        <ReviewModal selected={seletedReview} toggleModal={toggleReviewModal} />
      )}
      {isOpenQuestionModal && (
        <RequestModal
          selected={selectedQuestion}
          toggleModal={toggleQuestionModal}
        />
      )}
    </S.OrerHistory>
  );
};

export default OrderHistory;
