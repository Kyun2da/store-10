import styled from 'styled-components';
import ModalLayout from '@/components/Shared/Modal//ModalLayout';

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
  ${({ theme }) => theme.fontSize.m};
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

export const ModalButton = styled.button`
  padding: 2rem;
  width: 100%;
  border: 1px solid #ededed;
  border-radius: 1.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.placeholder};
  ${({ theme }) => theme.fontWeight.m};
  gap: 2rem;
`;

export const DeleteModalHeader = styled.div`
  padding: 1.5rem 3rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: ${({ theme }) => theme.color.error};
  color: #fff;
  ${({ theme }) => theme.fontSize.l};
  ${({ theme }) => theme.fontWeight.l};
`;

export const DeleteModalButtonArea = styled.div`
  display: flex;
`;

export const DeleteModalButton = styled.button`
  padding: 2rem 0;
  width: 50%;
  cursor: pointer;
  ${({ theme }) => theme.fontSize.m};
  ${({ theme }) => theme.fontWeight.m};

  & + & {
    border-left: 1px solid ${({ theme }) => theme.color['border-gray']};
  }

  &:hover {
    opacity: 0.75;
  }
`;
