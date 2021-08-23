import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { DELIVERY_REQUEST_MESSAGES } from '@/contstants';
import AddressModal from '@/components/Shared/Modal/AddressModal';
import useModal from '@/hooks/useModal';
import { useGetDefaultAddress } from '@/hooks/queries/address';
import { IAddress } from '@/types';

const OrderAddress = () => {
  const [requestMessage, setRequestMessage] = useState('');
  const [requestMessageInput, setRequestMessageInput] = useState('');
  const [address, selectAddress] = useState<IAddress | null>(null);
  const { data, isLoading } = useGetDefaultAddress();

  useEffect(() => {
    if (data) {
      selectAddress(data);
    }
  }, [data]);

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRequestMessage(e.currentTarget.value);
  };
  const [isOpen, toggleModal] = useModal(false);

  const renderAddressInfo = () => {
    if (!address) {
      return <div>empty</div>;
    }
    return (
      <S.AddressInfo>
        <S.AddressNameText>
          {address.name}
          {address.isDefault && (
            <S.DefaultAddress>기본 배송지</S.DefaultAddress>
          )}
        </S.AddressNameText>
        <S.AddressText>
          {address.address}, {address.detailAddress}
        </S.AddressText>
        <S.PhoneText>{address.phone}</S.PhoneText>

        {!address.isDefault && <S.AddressCheckbox label="기본 배송지로 저장" />}

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
            onChange={(e) => setRequestMessageInput(e.currentTarget.value)}
          />
        )}
      </S.AddressInfo>
    );
  };

  return (
    <article>
      <S.OrderAddressHeader>
        <span>배송지</span>
        <button onClick={() => toggleModal()}>변경</button>
      </S.OrderAddressHeader>
      {isLoading || !data ? <div>Loading...</div> : renderAddressInfo()}

      {isOpen && (
        <AddressModal
          toggleModal={toggleModal}
          selectAddress={selectAddress}
          address={address}
        />
      )}
    </article>
  );
};

export default OrderAddress;
