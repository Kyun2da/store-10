import styled from 'styled-components';
import ModalLayout from '../ModalLayout';

export const CouponModal = styled.div`
  width: 100%;
  max-height: 45rem;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  &:hover {
    &::-webkit-scrollbar {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
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

export const CouponModalLayout = styled(ModalLayout)`
  > div {
    max-width: 52rem;
    padding-right: 0;
    > div {
      > button {
        display: none;
      }
    }
  }
`;

export const CouponModalFooter = styled.footer`
  display: flex;
  margin-top: auto;
  padding-top: 3rem;
  gap: 1.2rem;

  button {
    flex: 1;
  }
`;
