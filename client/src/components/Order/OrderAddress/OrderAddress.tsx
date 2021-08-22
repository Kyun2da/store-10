import React, { useState } from 'react';
import * as S from './styles';
import { DELIVERY_REQUEST_MESSAGES } from '@/contstants';
import AddressModal from '@/components/Shared/Modal/AddressModal';
import useModal from '@/hooks/useModal';
import { IAddress } from '@/types';

interface IProps {}

const OrderAddress = ({}: IProps) => {
  const [requestMessage, setRequestMessage] = useState('');
  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRequestMessage(e.currentTarget.value);
  };
  const [modifyAddressData, setModifyAddressData] = useState<IAddress | null>(
    null
  );

  const [isOpen, toggleModal] = useModal(false);

  const openAddressModal = (modifyData?: IAddress) => () => {
    if (modifyData) {
      setModifyAddressData(modifyData);
    } else {
      setModifyAddressData(null);
    }
    toggleModal();
  };

  return (
    <article>
      <S.OrderAddressHeader>
        <span>배송지</span>
        <button onClick={() => toggleModal()}>변경</button>
      </S.OrderAddressHeader>

      <S.AddressInfo>
        <S.AddressNameText>김동진</S.AddressNameText>
        <S.AddressText>서울 특별시 광진구 화양동444, 상세주소</S.AddressText>
        <S.PhoneText>010-2424-2323</S.PhoneText>
        <S.AddressCheckbox label="기본 배송지로 저장" />
        <S.AddressSelect
          items={DELIVERY_REQUEST_MESSAGES}
          onChange={onChangeSelect}
        />
        {requestMessage === '직접입력' && (
          <S.AddressInput
            name="message"
            type="text"
            label="Outlined"
            placeholder="배송시 요청사항을 입력해주세요"
          />
        )}
      </S.AddressInfo>

      {isOpen && <AddressModal toggleModal={toggleModal} />}
    </article>
  );
};

export default OrderAddress;
