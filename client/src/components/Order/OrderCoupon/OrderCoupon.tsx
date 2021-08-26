import React, { Dispatch, useState } from 'react';
import * as S from './styles';
import {
  useGetUserValidCoupons,
  useRegisterUserCoupon,
} from '@/hooks/queries/coupon';
import Coupon from '@/components/Shared/Coupon';
import { IOrder, IUserCoupon } from '@/types';
import { SelectedSVG, DownChevronSVG, UpChevronSVG } from '@/assets/svgs';
import { Input } from '@/components/Shared/Input';
import Button from '@/components/Shared/Button';
interface IProps {
  setOrder: Dispatch<
    Partial<IOrder> | ((prev: Partial<IOrder>) => Partial<IOrder>)
  >;
  selectedCoupon: number | null;
}

const OrderCoupon = ({ setOrder, selectedCoupon }: IProps) => {
  const { data } = useGetUserValidCoupons();
  const { mutate, isLoading, error, reset } = useRegisterUserCoupon();
  const [inputValue, setInputValue] = useState('');
  const [collapsed, setCollapsed] = useState(true);
  const registerCoupon = () => {
    mutate(inputValue, {
      onSuccess() {
        setInputValue('');
      },
    });
  };
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
    reset();
  };
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
    <S.OrderCoupon>
      <S.OrderCouponHeader>
        <span>쿠폰</span>
      </S.OrderCouponHeader>
      <S.RegisterCouponWrapper>
        <S.CollapsibleWrapper onClick={() => setCollapsed(!collapsed)}>
          <span>쿠폰 코드가 있으신가요?</span>
          {collapsed ? (
            <UpChevronSVG width={15} height={15} />
          ) : (
            <DownChevronSVG width={15} height={15} />
          )}
        </S.CollapsibleWrapper>
        <S.RegisterCoupon className={collapsed ? 'collapsed' : ''}>
          <Input
            type="text"
            name="coupon"
            label="Outlined"
            fullWidth
            placeholder="쿠폰 코드를 입력해주세요"
            value={inputValue}
            onChange={onChangeInput}
            error={!!error}
            helperText="유효한 쿠폰이 아닙니다."
          />
          <Button
            type="button"
            color="primary"
            disabled={isLoading}
            onClick={registerCoupon}
          >
            등록
          </Button>
        </S.RegisterCoupon>
      </S.RegisterCouponWrapper>
      <S.CouponDisplay>
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
      </S.CouponDisplay>
    </S.OrderCoupon>
  );
};

export default OrderCoupon;
