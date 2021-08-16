import React, { VFC } from 'react';
import Portal from '@/components/Shared/Modal/Portal';
import { CloseSVG } from '@/assets/svgs';
import * as S from './styles';

interface CustomModalProps {
  children: React.ReactElement[] | React.ReactElement | string;
  toggleModal: () => void;
}

const CustomModal: VFC<CustomModalProps> = ({ children, toggleModal }) => {
  return (
    <Portal>
      <S.ModalOverlay>
        <S.ModalWrapper>
          <S.ModalInner>
            <S.ModalCloseButton onClick={toggleModal}>
              <CloseSVG width={25} height={25} stroke="#111" />
            </S.ModalCloseButton>
            {children}
          </S.ModalInner>
        </S.ModalWrapper>
      </S.ModalOverlay>
    </Portal>
  );
};

export default CustomModal;
