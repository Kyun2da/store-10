import React, { useState, Dispatch } from 'react';
import ModalLayout from '@/components/Shared/Modal/ModalLayout';
import Address from '@/components/Address';
import AddressForm from '@/components/Address/AddressForm';
import { LeftChevron } from '@/assets/svgs';
import { IAddress } from '@/types';

import * as S from './styles';

interface IProps {
  toggleModal: () => void;
  selectAddress: Dispatch<IAddress>;
}

const AddressModal = ({ toggleModal, selectAddress }: IProps) => {
  const [openForm, setOpenForm] = useState(false);
  const [addressToModify, setAddressToModify] = useState<IAddress | null>(null);

  const renderHeaderText = () => {
    if (!openForm) return <span>배송지 선택</span>;
    if (addressToModify) return <span>배송지 수정</span>;
    return <span>배송지 추가</span>;
  };

  return (
    <ModalLayout width="40rem" height="65rem" toggleModal={toggleModal}>
      <S.AddressModalHeader>
        {openForm ? (
          <button onClick={() => setOpenForm(false)}>
            <LeftChevron />
          </button>
        ) : (
          <S.HeaderEmptyItem />
        )}
        {renderHeaderText()}
        <S.HeaderEmptyItem />
      </S.AddressModalHeader>
      <S.AddressModalDivider />
      {openForm ? (
        <AddressForm
          toggleModal={toggleModal}
          addressToModify={addressToModify}
          setAddressToModify={setAddressToModify}
          setOpenForm={setOpenForm}
        />
      ) : (
        <Address
          setOpenForm={setOpenForm}
          selectAddress={selectAddress}
          toggleModal={toggleModal}
          setAddressToModify={setAddressToModify}
        />
      )}
    </ModalLayout>
  );
};

export default AddressModal;
