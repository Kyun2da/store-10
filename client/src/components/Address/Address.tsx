import React, { useState } from 'react';
import * as S from './styles';
import Button from '@/components/Shared/Button';
import { AddressModal } from '@/components/Shared/Modal';
import useModal from '@/hooks/useModal';
import { IAddress } from '@/types';
import { PlusSVG } from '@/assets/svgs';
import { useGetAddresses, useDeleteAddress } from '@/hooks/queries/address';

interface IAddresseProps {
  className?: string;
}

const Addresse = ({ className }: IAddresseProps) => {
  const [isOpen, toggleModal] = useModal(false);
  const [modifyAddressData, setModifyAddressData] = useState<IAddress | null>(
    null
  );

  const { data, isLoading } = useGetAddresses();
  const { mutate } = useDeleteAddress();

  const openAddressModal = (modifyData?: IAddress) => () => {
    if (modifyData) {
      setModifyAddressData(modifyData);
    } else {
      setModifyAddressData(null);
    }
    toggleModal();
  };

  const onClickDelete = (id?: number) => {
    if (id) {
      mutate(id);
    }
  };

  if (!data || isLoading) {
    return <div>Loading</div>;
  }
  return (
    <>
      <S.AddressList className={className}>
        {data.map((address) => (
          <S.AddressItem
            key={address.id}
            className={!!address.isDefault ? 'default-address' : undefined}
          >
            <S.AddressItemHeader>
              <S.AddressName>{address.name}</S.AddressName>
              {!!address.isDefault && (
                <S.DefaultAddress>기본 배송지</S.DefaultAddress>
              )}
            </S.AddressItemHeader>
            <S.AddressInfo>
              <S.AddressInfoText>{address.postcode}</S.AddressInfoText>
              <S.AddressInfoText>{address.address}</S.AddressInfoText>
              <S.AddressInfoText>{address.detailAddress}</S.AddressInfoText>
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
              <Button
                type="button"
                color="white"
                size="Small"
                onClick={() => onClickDelete(address.id)}
              >
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
        <AddressModal
          modifyAddressData={modifyAddressData}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
};

export default Addresse;
