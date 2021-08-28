import styled from 'styled-components';
import { OrderInfoHeader } from '../styles';

export const OrderCoupon = styled.div``;

export const OrderCouponHeader = styled(OrderInfoHeader)`
  margin-top: 2.4rem;
`;

export const RegisterCoupon = styled.div`
  &.collapsed {
    display: none;
  }
  display: flex;
  padding: 1.2rem;
  overflow: hidden;
  button {
    flex-grow: 0;
    margin-left: 1.2rem;
    width: 10rem;
  }
`;

export const RegisterCouponWrapper = styled.div`
  background: ${({ theme }) => theme.color['border-gray']};
`;

export const CollapsibleWrapper = styled.div`
  cursor: pointer;
  text-align: right;
  padding: 1.2rem;
  span {
    color: ${({ theme }) => theme.color.label};
    ${({ theme }) => theme.fontWeight.m};
    ${({ theme }) => theme.fontSize.s};
    margin-right: 1.2rem;
  }
  svg {
    fill: ${({ theme }) => theme.color.label};
  }
`;

export const CouponDisplay = styled.div`
  padding-bottom: 2rem;
`;

export const CouponWrapper = styled.div`
  position: relative;
  border-radius: 2rem;
  margin-top: 2rem;
  display: inline-block;
  cursor: pointer;
  &.selected {
    border: 1rem solid ${({ theme }) => theme.color.primary};
    > div {
      opacity: 0.4;
    }
    > svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }
  }
`;
