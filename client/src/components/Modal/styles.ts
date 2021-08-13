import styled from 'styled-components';

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
`;

export const ModalButtonArea = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
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
