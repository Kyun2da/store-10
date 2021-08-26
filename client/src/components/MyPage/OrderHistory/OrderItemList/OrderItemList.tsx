import React from 'react';
import * as S from './styles';
import { wonFormat, dateFormat } from '@/utils/helper';
import { ORDER_STATUS } from '@/contstants';
import { Link } from '@/lib/Router';

interface IProps {
  date: string;
  status: string;
  deliveredAt?: string;
  items: {
    id: number;
    title: string;
    price: number;
    count: number;
    img: string;
  }[];
  clickOnReviewListener: (target: number) => void;
  clickOnQuestionListener: (target: number) => void;
}

const OrderItemList = ({
  date,
  items,
  status,
  deliveredAt,
  clickOnReviewListener,
  clickOnQuestionListener,
}: IProps) => {
  return (
    <div>
      <S.OrderItemListHeader>
        {dateFormat(date, '.')} 주문
      </S.OrderItemListHeader>
      <S.OrderItemInfoHeader>
        <S.OrderItemInfoStatusWrapper>
          <S.OrderItemInfoStatus>{ORDER_STATUS[status]}</S.OrderItemInfoStatus>
          {deliveredAt && (
            <S.OrderItemInfoSubStatus>
              · {dateFormat(deliveredAt, '.')} 도착
            </S.OrderItemInfoSubStatus>
          )}
        </S.OrderItemInfoStatusWrapper>
        <S.OrderItemActions>
          <Link to={`/detail/${items[0].id}`}>
            <S.OrderDeliveryButton type="button" color="white">
              상품이동
            </S.OrderDeliveryButton>
          </Link>
        </S.OrderItemActions>
        <S.OrderItemActions>
          <S.OrderDeliveryButton type="button" color="white">
            배송조회
          </S.OrderDeliveryButton>
        </S.OrderItemActions>
      </S.OrderItemInfoHeader>
      <S.OrderItemList>
        {items.map((item) => (
          <S.OrderItem key={item.id}>
            <S.OrderItemInfo>
              <S.OrderItemInfoBody>
                <img width={64} height={64} src={item.img} />
                <S.OrderItemInfoDescription>
                  <S.OrderItemName>{item.title}</S.OrderItemName>
                  <S.OrderItemPrice>
                    {wonFormat(item.price)} · {item.count}개
                  </S.OrderItemPrice>
                </S.OrderItemInfoDescription>
              </S.OrderItemInfoBody>
            </S.OrderItemInfo>
            <S.OrderItemActions>
              <S.OrderActionsButton
                type="button"
                color="white"
                onClick={() => clickOnQuestionListener(item.id)}
              >
                문의하기
              </S.OrderActionsButton>
              <S.OrderActionsButton
                type="button"
                color="white"
                onClick={() => clickOnReviewListener(item.id)}
              >
                리뷰하기
              </S.OrderActionsButton>
            </S.OrderItemActions>
          </S.OrderItem>
        ))}
      </S.OrderItemList>
    </div>
  );
};

export default OrderItemList;
