import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import ModalLayout from '@/components/Shared/Modal/ModalLayout';
import Input from '@/components/Shared/Input/Input';
import Button from '@/components/Shared/Button';
import { IAddressData } from '@/types';
import * as S from './styles';

interface IAddressModalProps {
  toggleModal: () => void;
  modifyAddressData?: IAddressData | null;
}

const AddresssModal = ({
  toggleModal,
  modifyAddressData,
}: IAddressModalProps) => {
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);
  const [name, setName] = useState(
    modifyAddressData ? modifyAddressData.name : ''
  );
  const [postcode, setPostcode] = useState(
    modifyAddressData ? modifyAddressData.postcode : ''
  );
  const [address, setAddress] = useState(
    modifyAddressData ? modifyAddressData.address : ''
  );
  const [detailAddress, setDetailAddress] = useState(
    modifyAddressData ? modifyAddressData.detailAddress : ''
  );
  const [phone, setPhone] = useState(
    modifyAddressData ? modifyAddressData.phone : ''
  );
  const [message, setMessage] = useState(
    modifyAddressData ? modifyAddressData.message : ''
  );
  const [isDefault, setIsDefault] = useState(
    modifyAddressData ? modifyAddressData.isDefault : false
  );

  const onCompleteSearchAddress = (data: Record<string, string>) => {
    setAddress(data.address);
    setPostcode(data.zonecode);
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
    if (!postcode || !address) {
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
      <S.ModalHeader>배송지 추가</S.ModalHeader>
      <S.ModalDivider />
      <S.ModalBody>
        <Input
          type="text"
          label="Outlined"
          name="name"
          placeholder="받는 사람"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.currentTarget.value)
          }
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
            name="name"
            placeholder="우편번호 검색"
            value={postcode}
            onFocus={() => setIsPostcodeOpen(true)}
            attributes={{
              readOnly: true,
            }}
          />
        </S.PostcodeWrapper>
        <Input
          type="text"
          label="Outlined"
          name="name"
          placeholder="주소"
          value={address}
          onFocus={() => setIsPostcodeOpen(true)}
          attributes={{
            readOnly: true,
          }}
        />
        <Input
          type="text"
          label="Outlined"
          name="name"
          placeholder="상세 주소"
          value={detailAddress}
          onFocus={onFocusDetailAddress}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDetailAddress(e.currentTarget.value)
          }
        />
        <Input
          type="text"
          label="Outlined"
          name="name"
          placeholder="연락처"
          value={phone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPhone(e.currentTarget.value)
          }
        />
        <Input
          type="text"
          label="Outlined"
          name="name"
          value={message}
          placeholder="배송 요청사항"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMessage(e.currentTarget.value)
          }
        />

        <S.DefaultAddrssCheckbox
          checked={isDefault}
          label="기본 배송지로 설정"
          onChange={() => setIsDefault(!isDefault)}
        />
        {isPostcodeOpen && (
          <S.DuamPostWrapper>
            <DaumPostcode onComplete={onCompleteSearchAddress} height="50rem" />
          </S.DuamPostWrapper>
        )}
      </S.ModalBody>
      <S.ModalButtonArea>
        <Button type="button" color="primary">
          {modifyAddressData ? '수정하기' : '저장하기'}
        </Button>
      </S.ModalButtonArea>
    </ModalLayout>
  );
};

export default AddresssModal;
