import React, { useState } from 'react';
import * as S from './styles';
import Button from '@/components/Button';
import AddresssModal from '../Modal/AddressModal/AddressModal';
import AddressesDummy from '@/dummies/addresses';
import useModal from '@/hooks/useModal';
import { IAddressData } from '@/types';
import { PlusSVG } from '@/assets/svgs';

interface IAddressesProps {
  className?: string;
}

const Addresses = ({ className }: IAddressesProps) => {
  const [isOpen, toggleModal] = useModal(false);
  const [modifyAddressData, setModifyAddressData] =
    useState<IAddressData | null>(null);

  const openAddressModal = (modifyData?: IAddressData) => () => {
    if (modifyData) {
      setModifyAddressData(modifyData);
    } else {
      setModifyAddressData(null);
    }
    toggleModal();
  };

  return (
    <>
      <S.AddressList className={className}>
        {AddressesDummy.map((address) => (
          <S.AddressItem
            key={address.id}
            className={address.isDefault ? 'default-address' : undefined}
          >
            <S.AddressItemHeader>
              <S.AddressName>{address.name}</S.AddressName>
              {address.isDefault && (
                <S.DefaultAddress>기본 배송지</S.DefaultAddress>
              )}
            </S.AddressItemHeader>
            <S.AddressInfo>
              <S.AddressInfoText>{address.address}</S.AddressInfoText>
              <S.AddressInfoText>{address.phone}</S.AddressInfoText>
            </S.AddressInfo>
            <S.DeliveryMessage>{address.message}</S.DeliveryMessage>
            <S.AddressItemFooter>
              <Button
                type="button"
                color="white"
                size="Small"
                onClick={openAddressModal(address)}
              >
                수정
              </Button>
              <Button type="button" color="white" size="Small">
                삭제
              </Button>
            </S.AddressItemFooter>
          </S.AddressItem>
        ))}

        <S.AddressListFooter>
          <Button type="button" color="primary" onClick={openAddressModal()}>
            <PlusSVG fill="white" />
            배송지 추가
          </Button>
        </S.AddressListFooter>
      </S.AddressList>

      {isOpen && (
        <AddresssModal
          modifyAddressData={modifyAddressData}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
};

export default Addresses;
