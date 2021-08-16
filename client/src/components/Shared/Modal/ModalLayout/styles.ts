import styled from 'styled-components';

export const ModalOverlay = styled.div`
  display: flex;
  background-color: rgba(1, 1, 1, 0.55);
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999999;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 3rem;
  padding: 3rem;
  width: 65%;
  min-height: 55%;
  background-color: #fff;
`;

export const ModalInner = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  gap: 2rem;
  flex-direction: column;
  height: 100%;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`;
