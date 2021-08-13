import React, { VFC } from 'react';
import ModalLayout from './ModalLayout';
import * as S from './styles';

interface PolicyModalProps {
  toggleModal: () => void;
}

const PolicyModal: VFC<PolicyModalProps> = ({ toggleModal }) => {
  return (
    <ModalLayout toggleModal={toggleModal}>
      <S.ModalHeader>ModalHeader Example</S.ModalHeader>
      <S.ModalDivider />
      <S.ModalBody>
        ModalBody Example: Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Dolore exercitationem officia velit veritatis tempore harum quo
        debitis adipisci. Sint numquam laudantium rerum quod est. Fugit ratione
        iure neque quis deserunt.
      </S.ModalBody>
      <S.ModalButtonArea>
        <S.ModalButton>확인</S.ModalButton>
        <S.ModalButton>동의</S.ModalButton>
      </S.ModalButtonArea>
    </ModalLayout>
  );
};

export default PolicyModal;
