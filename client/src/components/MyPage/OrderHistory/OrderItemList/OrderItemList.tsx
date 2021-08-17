import React, { useState } from 'react';
import * as S from './styles';
import Button from '@/components/Shared/Button';
import { wonFormat } from '@/helper';
import { ORDER_STATUS } from '@/contstants';

interface IProps {
  date: string;
  status: string;
  deliveredAt: string | null;
  items: {
    name: string;
    price: number;
    count: number;
  }[];
}

const OrderItemList = ({ date, items, status, deliveredAt }: IProps) => {
  const renderItems = () =>
    items.map((item) => (
      <S.OrderItemInfoBody>
        <img
          width={64}
          height={64}
          src="https://store-10.s3.ap-northeast-2.amazonaws.com/test/test.jpeg"
        />
        <S.OrderItemInfoDescription>
          <S.OrderItemName>{item.name}</S.OrderItemName>
          <S.OrderItemPrice>
            {wonFormat(item.price)} · {item.count}개
          </S.OrderItemPrice>
        </S.OrderItemInfoDescription>
      </S.OrderItemInfoBody>
    ));

  return (
    <S.OrderItemList>
      <S.OrderItemListHeader>{date} 주문</S.OrderItemListHeader>
      <S.OrderItem>
        <S.OrderItemInfo>
          <S.OrderItemInfoHeader>
            <S.OrderItemInfoStatus>
              {ORDER_STATUS[status]}
            </S.OrderItemInfoStatus>
            {deliveredAt && (
              <S.OrderItemInfoSubStatus>
                · 2021.05.13 도착
              </S.OrderItemInfoSubStatus>
            )}
          </S.OrderItemInfoHeader>

          {renderItems()}
        </S.OrderItemInfo>
        <S.OrderItemActions>
          <Button type="button" color="white">
            배송조회
          </Button>
          <Button type="button" color="white">
            문의하기
          </Button>
          <Button type="button" color="white">
            리뷰하기
          </Button>
        </S.OrderItemActions>
      </S.OrderItem>
    </S.OrderItemList>
  );
};

export default OrderItemList;
