import React, { Dispatch } from 'react';
import * as S from './styles';
import { useGetUserValidCoupons } from '@/hooks/queries/coupon';
import Coupon from '@/components/Shared/Coupon';
import { IOrder, IUserCoupon } from '@/types';
import { SelectedSVG } from '@/assets/svgs';
interface IProps {
  setOrder: Dispatch<
    Partial<IOrder> | ((prev: Partial<IOrder>) => Partial<IOrder>)
  >;
  selectedCoupon: number | null;
}

const OrderCoupon = ({ setOrder, selectedCoupon }: IProps) => {
  const { data } = useGetUserValidCoupons();
  const selectCoupon = (coupon: IUserCoupon) => {
    if (selectedCoupon === coupon.id) {
      setOrder((prev) => ({
        ...prev,
        userCoupon_id: null,
        coupon_discount: 0,
      }));
    } else {
      setOrder((prev) => ({
        ...prev,
        userCoupon_id: coupon.id,
        coupon_discount: coupon.amount,
      }));
    }
  };
  return (
    <div>
      <S.OrderCouponHeader>
        <span>쿠폰</span>
      </S.OrderCouponHeader>
      {(data || []).map((coupon) => {
        const isSelected = selectedCoupon === coupon.id;
        return (
          <S.CouponWrapper
            className={isSelected ? 'selected' : undefined}
            onClick={() => selectCoupon(coupon)}
            key={coupon.id}
          >
            {isSelected && <SelectedSVG width={120} height={120} />}
            <Coupon
              name={coupon.name}
              amount={coupon.amount}
              isValid={coupon.is_valid}
            />
          </S.CouponWrapper>
        );
      })}
    </div>
  );
};

export default OrderCoupon;
