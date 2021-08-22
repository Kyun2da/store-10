import React from 'react';
import * as S from './styles';
import Button from '@/components/Shared/Button';
import { useGetAddresses, useDeleteAddress } from '@/hooks/queries/address';
import AdderssDummies from '@/dummies/addresses';

interface IAddresseProps {
  className?: string;
}

const Addresse = ({ className }: IAddresseProps) => {
  // const { data, isLoading } = useGetAddresses();
  const data = AdderssDummies;
  const { mutate } = useDeleteAddress();

  const onClickDelete = (id?: number) => {
    if (id) {
      mutate(id);
    }
  };

  // if (!data || isLoading) {
  //   return <div>Loading</div>;
  // }
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
              <S.AddressInfoText>{address.address}</S.AddressInfoText>
              <S.AddressInfoText>{address.detailAddress}</S.AddressInfoText>
              <S.AddressInfoPhone>{address.phone}</S.AddressInfoPhone>
            </S.AddressInfo>
            <S.AddressItemFooter>
              <Button
                type="button"
                color="white"
                size="Small"
                // onClick={openAddressModal(address)}
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
              <Button
                type="button"
                color="primary"
                size="Small"
                onClick={() => {}}
              >
                선택
              </Button>
            </S.AddressItemFooter>
          </S.AddressItem>
        ))}
      </S.AddressList>
    </>
  );
};

export default Addresse;
