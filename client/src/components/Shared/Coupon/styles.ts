import styled from 'styled-components';

interface ValidCoupon {
  isValid: boolean;
}

export const Coupon = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.color.line};
  background-color: ${({ theme }) => theme.color['off-white']};
  width: 50rem;
  height: 20rem;

  & + & {
    margin-top: 3rem;
  }
`;

export const CouponImageWrapper = styled.div`
  position: relative;
  width: 12rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CouponImageHover = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: #ffffff;
  position: absolute;
  padding: 1rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(30, 30, 30, 0.8);
`;

export const CouponBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  flex: 1;
`;

export const CouponHeader = styled.div<ValidCoupon>`
  display: flex;
  justify-content: space-between;
  color: #999;

  .coupon-title {
    ${({ theme }) => theme.fontSize.l};
    ${({ theme }) => theme.fontWeight.xl};
    color: ${({ isValid, theme }) => (isValid ? theme.color.primary3 : '#999')};
  }

  .usable {
    border-radius: 1.5rem;
    background-color: ${({ isValid, theme }) =>
      isValid ? theme.color.primary3 : '#999'};
    color: #fff;
    padding: 0.5rem 1.5rem;
    ${({ theme }) => theme.fontSize.s};
    ${({ theme }) => theme.fontWeight.m};
  }
`;

export const CouponDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Discount = styled.p<ValidCoupon>`
  font-size: 8rem;
  line-height: 4rem;
  font-weight: 500;
  font-family: 'BMDOHYEON', sans-serif;
  color: ${({ isValid, theme }) => (isValid ? theme.color.primary3 : '#999')};

  span {
    font-size: 4rem;
  }
`;

export const CouponTail = styled.div<ValidCoupon>`
  position: relative;
  width: 5rem;
  height: 20rem;
  background-color: ${({ isValid, theme }) =>
    isValid ? theme.color.primary3 : '#999'};

  &::after {
    content: '';
    position: absolute;
    width: 5rem;
    height: 5rem;
    border-radius: 10rem;
    background-color: ${({ isValid, theme }) =>
      isValid ? theme.color.primary3 : '#999'};
    top: 50%;
    left: -50%;
    transform: translateY(-50%);
  }
`;
