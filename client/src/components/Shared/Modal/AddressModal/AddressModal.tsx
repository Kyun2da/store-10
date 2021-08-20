import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import ModalLayout from '@/components/Shared/Modal/ModalLayout';
import Input from '@/components/Shared/Input/Input';
import Button from '@/components/Shared/Button';
import { IAddress } from '@/types';
import * as S from './styles';
import { usePostAddress, useUpdateAddress } from '@/hooks/queries/address';

interface IAddressModalProps {
  toggleModal: () => void;
  modifyAddressData?: IAddress | null;
}

const AddressModal = ({
  toggleModal,
  modifyAddressData,
}: IAddressModalProps) => {
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);
  const [inputs, setInputs] = useState<IAddress>({
    id: modifyAddressData ? modifyAddressData.id : undefined,
    name: modifyAddressData ? modifyAddressData.name : '',
    postcode: modifyAddressData ? modifyAddressData.postcode : '',
    address: modifyAddressData ? modifyAddressData.address : '',
    detailAddress: modifyAddressData ? modifyAddressData.detailAddress : '',
    phone: modifyAddressData ? modifyAddressData.phone : '',
    message: modifyAddressData ? modifyAddressData.message : '',
    isDefault: modifyAddressData ? modifyAddressData.isDefault : false,
  });
  const postMutation = usePostAddress();
  const updateMutation = useUpdateAddress();

  const onClickSend = () => {
    const { mutate } = modifyAddressData ? updateMutation : postMutation;
    mutate({
      ...inputs,
    });
    toggleModal();
  };
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputs({ ...inputs, [name]: value });
  };

  const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;
    setInputs({ ...inputs, [name]: checked });
  };

  const onCompleteSearchAddress = (data: Record<string, string>) => {
    setInputs({
      ...inputs,
      address: data.address,
      postcode: data.zonecode,
    });
    setIsPostcodeOpen(false);
  };

  const onClickModal = () => {
    if (isPostcodeOpen) {
      setIsPostcodeOpen(false);
    } else {
      // toggleModal();
    }
  };

  const onFocusDetailAddress = () => {
    if (!inputs.postcode || !inputs.address) {
      setIsPostcodeOpen(true);
    }
  };

  return (
    <ModalLayout
      width="38rem"
      height="auto"
      toggleModal={toggleModal}
      onClick={onClickModal}
    >
      <S.AddressModalHeader>배송지 추가</S.AddressModalHeader>
      <S.AddressModalDivider />
      <S.AddressModalBody>
        <Input
          type="text"
          label="Outlined"
          name="name"
          placeholder="받는 사람"
          value={inputs.name}
          onChange={onChangeInput}
        />
        <S.PostcodeWrapper>
          <Button
            type="button"
            color="primary"
            size="Small"
            onClick={() => setIsPostcodeOpen(true)}
          >
            주소 찾기
          </Button>

          <Input
            type="text"
            label="Outlined"
            name="postcode"
            placeholder="우편번호 검색"
            value={inputs.postcode}
            onFocus={() => setIsPostcodeOpen(true)}
            attributes={{
              readOnly: true,
            }}
          />
        </S.PostcodeWrapper>
        <Input
          type="text"
          label="Outlined"
          name="address"
          placeholder="주소"
          value={inputs.address}
          onFocus={() => setIsPostcodeOpen(true)}
          attributes={{
            readOnly: true,
          }}
        />
        <Input
          type="text"
          label="Outlined"
          name="detailAddress"
          placeholder="상세 주소"
          value={inputs.detailAddress}
          onFocus={onFocusDetailAddress}
          onChange={onChangeInput}
        />
        <Input
          type="text"
          label="Outlined"
          name="phone"
          placeholder="연락처"
          value={inputs.phone}
          onChange={onChangeInput}
        />
        <Input
          type="text"
          label="Outlined"
          name="message"
          value={inputs.message}
          placeholder="배송 요청사항"
          onChange={onChangeInput}
        />

        <S.DefaultAddrssCheckbox
          name="isDefault"
          checked={inputs.isDefault}
          label="기본 배송지로 설정"
          onChange={onChangeCheckbox}
        />
        {isPostcodeOpen && (
          <S.DuamPostWrapper>
            <DaumPostcode onComplete={onCompleteSearchAddress} height="50rem" />
          </S.DuamPostWrapper>
        )}
      </S.AddressModalBody>
      <S.AddressModalButtonArea>
        <Button type="button" color="primary" onClick={onClickSend}>
          {modifyAddressData ? '수정하기' : '저장하기'}
        </Button>
      </S.AddressModalButtonArea>
    </ModalLayout>
  );
};

export default AddressModal;
