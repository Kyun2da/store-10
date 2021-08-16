import styled from 'styled-components';
import ModalLayout from '@/components/Shared/Modal//ModalLayout';
import Checkbox from '@/components/Shared/Checkbox';

export const ModalWrapper = styled(ModalLayout)`
  width: 100%;
`;

export const ModalHeader = styled.div`
  ${({ theme }) => theme.fontSize.l};
  ${({ theme }) => theme.fontWeight.l};
`;

export const ModalDivider = styled.div`
  border-bottom: 1px solid #ededed;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  ${({ theme }) => theme.fontSize.m}
  input {
    &:not(:first-child) {
      margin-top: 1.2rem;
    }
  }
`;

export const ModalButtonArea = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  button {
    width: 100%;
  }
`;

export const DuamPostWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  right: 0;
  bottom: 0;
  transform: translate(-50%, -50%);
  width: 36rem;
  height: 50rem;
  background-color: rgba(1, 1, 1, 0.55);
`;

export const PostcodeWrapper = styled.div`
  margin-top: 1.2rem;
  display: flex;
  justify-content: space-between;
  input {
    flex: 2;
    margin-top: 0 !important;
    margin-left: 2rem;
  }

  button {
    border-radius: 10px;
    ${({ theme }) => theme.fontSize.m}
  }
`;

export const DefaultAddrssCheckbox = styled(Checkbox)`
  margin-top: 1.2rem;
  color: ${({ theme }) => theme.color['text-color']};
`;
