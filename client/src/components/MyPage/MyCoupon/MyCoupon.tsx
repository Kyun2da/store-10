import Title from '@/components/Shared/Title';
import React from 'react';
import * as S from './styles';
import Coupon from '@/components/Shared/Coupon';

const MyCoupon = () => {
  return (
    <S.MyCoupon>
      <S.CouponDisplay>
        <Title className="title" level={5}>
          보유한 쿠폰 목록: 1장
        </Title>
        <Coupon name="우아한 COUPON" amount={50} isValid={true} />
      </S.CouponDisplay>

      <S.CouponDisplay>
        <Title className="title" level={5}>
          사용한 쿠폰 목록: 1장
        </Title>
        <Coupon name="우아한 COUPON" amount={50} isValid={false} />
      </S.CouponDisplay>
    </S.MyCoupon>
  );
};

export default MyCoupon;
