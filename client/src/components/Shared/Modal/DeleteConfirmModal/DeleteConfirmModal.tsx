import React from 'react';
import ModalLayout from '@/components/Shared/Modal/ModalLayout';
import * as S from '../styles';

interface IDeleteConfirmModal {
  toggleModal: () => void;
  removeSelectedReview: () => void;
}

const DeleteConfirmModal = ({
  toggleModal,
  removeSelectedReview,
}: IDeleteConfirmModal) => {
  return (
    <ModalLayout compact toggleModal={toggleModal}>
      <S.DeleteModalHeader>정말 삭제하시겠어요?</S.DeleteModalHeader>
      <S.DeleteModalButtonArea>
        <S.DeleteModalButton onClick={() => removeSelectedReview()}>
          예
        </S.DeleteModalButton>
        <S.DeleteModalButton onClick={toggleModal}>아니오</S.DeleteModalButton>
      </S.DeleteModalButtonArea>
    </ModalLayout>
  );
};

export default DeleteConfirmModal;
