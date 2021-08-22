import React, { useState } from 'react';
import ModalLayout from '@/components/Shared/Modal/ModalLayout';
import Button from '@/components/Shared/Button';
import Address from '@/components/Address';
import AddressForm from '@/components/Address/AddressForm';
import { LeftChevron } from '@/assets/svgs';

import * as S from './styles';

interface IProps {
  toggleModal: () => void;
}

const AddressModal = ({ toggleModal }: IProps) => {
  const [openForm, setOpenForm] = useState(false);
  const onClickFooterButton = () => {
    if (openForm) {
    } else {
      setOpenForm(true);
    }
  };
  return (
    <ModalLayout width="40rem" height="65rem" toggleModal={toggleModal}>
      <S.AddressModalHeader>
        {openForm ? (
          <button onClick={() => setOpenForm(false)}>
            <LeftChevron />
          </button>
        ) : (
          <span></span>
        )}
        <span>배송지 추가</span>
        <span></span>
      </S.AddressModalHeader>
      <S.AddressModalDivider />
      <S.AddressModalBody>
        {openForm ? (
          <AddressForm toggleModal={toggleModal} modifyAddressData={null} />
        ) : (
          <Address />
        )}
      </S.AddressModalBody>
      <S.AddressModalDivider />
      <S.AddressModalButtonArea>
        <Button type="button" color="primary" onClick={onClickFooterButton}>
          {openForm ? '저장' : '배송지 추가'}
        </Button>
      </S.AddressModalButtonArea>
    </ModalLayout>
  );
};

export default AddressModal;
