import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import Input from '@/components/Shared/Input/Input';
import { IAddress } from '@/types';
import { usePostAddress, useUpdateAddress } from '@/hooks/queries/address';
import Button from '@/components/Shared/Button';
import Form from '@/components/Shared/Form';
import useModal from '@/hooks/useModal';
import * as S from './styles';

interface IProps {
  modifyAddressData: IAddress | null;
  toggleModal: () => void;
}

const AddressForm = ({ modifyAddressData, toggleModal }: IProps) => {
  const [isPostcodeOpen, toggleIsPostcodeOpen] = useModal(false);
  const [inputs, setInputs] = useState<IAddress>({
    id: modifyAddressData ? modifyAddressData.id : undefined,
    name: modifyAddressData ? modifyAddressData.name : '',
    postcode: modifyAddressData ? modifyAddressData.postcode : '',
    address: modifyAddressData ? modifyAddressData.address : '',
    detailAddress: modifyAddressData ? modifyAddressData.detailAddress : '',
    phone: modifyAddressData ? modifyAddressData.phone : '',
    isDefault: modifyAddressData ? modifyAddressData.isDefault : false,
  });
  const [errors, setErros] = useState<Record<string, boolean>>({
    id: false,
    name: false,
    postcode: false,
    address: false,
    detailAddress: false,
    phone: false,
  });
  const checkValidation = (): boolean => {
    let isValid = true;
    for (const [key, value] of Object.entries(inputs)) {
      if (!value && errors[key] !== undefined) {
        console.log(value, key, errors[key]);
        setErros({ ...errors, [key]: true });
        isValid = false;
      }
    }
    return isValid;
  };
  const postMutation = usePostAddress();
  const updateMutation = useUpdateAddress();

  const onClickSend = () => {
    if (!checkValidation()) {
      return;
    }
    const { mutate } = modifyAddressData ? updateMutation : postMutation;
    mutate({
      ...inputs,
    });
    toggleModal();
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInputs({ ...inputs, [name]: value });
    if (value) {
      setErros({ ...errors, [name]: false });
    }
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
    toggleIsPostcodeOpen();
  };

  const onClickModal = () => {
    if (isPostcodeOpen) {
      toggleIsPostcodeOpen();
    } else {
      // toggleModal();
    }
  };

  const onFocusDetailAddress = () => {
    if (!inputs.postcode || !inputs.address) {
      toggleIsPostcodeOpen();
    }
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 머지 했는데 오류 나는거 땜에 임시로 넣어둡니다 동진님~
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <S.FormRow>
        <S.FormRowName>받는 사람</S.FormRowName>
        <Input
          type="text"
          label="Outlined"
          name="name"
          placeholder="받는 사람"
          fullWidth
          value={inputs.name}
          onChange={onChangeInput}
          error={errors.name}
        />
      </S.FormRow>

      <S.FormRow>
        <S.FormRowName>연락처</S.FormRowName>
        <Input
          type="text"
          label="Outlined"
          name="phone"
          fullWidth
          placeholder="연락처"
          value={inputs.phone}
          onChange={onChangeInput}
          error={errors.phone}
        />
      </S.FormRow>

      <S.FormRow>
        <S.FormRowName>주소</S.FormRowName>
        <S.PostcodeWrapper>
          <Button
            type="button"
            color="primary"
            size="Small"
            onClick={() => toggleIsPostcodeOpen()}
          >
            주소 찾기
          </Button>

          <Input
            type="text"
            label="Outlined"
            name="postcode"
            placeholder="우편번호 검색"
            fullWidth
            value={inputs.postcode}
            onFocus={toggleIsPostcodeOpen}
            attributes={{
              readOnly: true,
            }}
            error={errors.postcode}
          />
        </S.PostcodeWrapper>
      </S.FormRow>

      <S.FormRow>
        <S.FormRowName></S.FormRowName>
        <Input
          type="text"
          label="Outlined"
          name="address"
          placeholder="주소"
          value={inputs.address}
          fullWidth
          onFocus={toggleIsPostcodeOpen}
          attributes={{
            readOnly: true,
          }}
          error={errors.address}
        />
      </S.FormRow>
      <S.FormRow>
        <S.FormRowName></S.FormRowName>
        <Input
          type="text"
          label="Outlined"
          name="detailAddress"
          placeholder="상세 주소"
          fullWidth
          value={inputs.detailAddress}
          onFocus={onFocusDetailAddress}
          onChange={onChangeInput}
          error={errors.detailAddress}
        />
      </S.FormRow>

      <S.FormRow>
        <S.FormRowName></S.FormRowName>
        <S.DefaultAddrssCheckbox
          name="isDefault"
          checked={inputs.isDefault}
          label="기본 배송지로 설정"
          onChange={onChangeCheckbox}
        />
      </S.FormRow>

      {isPostcodeOpen && (
        <S.DuamPostWrapper
          width="35rem"
          toggleModal={toggleIsPostcodeOpen}
          onClick={toggleIsPostcodeOpen}
        >
          <DaumPostcode onComplete={onCompleteSearchAddress} height="50rem" />
        </S.DuamPostWrapper>
      )}
    </Form>
  );
};

export default AddressForm;
