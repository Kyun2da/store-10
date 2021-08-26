import styled from 'styled-components';
import { OrderInfoHeader } from '../styles';

export const OrderCouponHeader = styled(OrderInfoHeader)`
  margin-top: 2.4rem;
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
