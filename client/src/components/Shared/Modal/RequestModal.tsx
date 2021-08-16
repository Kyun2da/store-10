import React from 'react';
import Button from '@/components/Shared/Button';
import { Input } from '@/components/Shared/Input';
import Title from '@/components/Shared/Title';
import ModalLayout from './ModalLayout';
import * as S from './styles';
import { Textarea } from '@/components/Shared/Input';
import Form from '@/components/Shared/Form';
import CategorySelector from '@/components/CategorySelector';

interface RequestModalProps {
  toggleModal: () => void;
}

const RequestModal = ({ toggleModal }: RequestModalProps) => {
  return (
    <ModalLayout toggleModal={toggleModal}>
      <S.ModalHeader>상품문의 작성</S.ModalHeader>
      <S.ModalDivider />
      <S.ModalBody>
        <Form gap={2}>
          <div className="input-wrapper">
            <Title level={5}>문의 유형</Title>
            <CategorySelector />
          </div>
          <div className="input-wrapper">
            <Title level={5}>문의 제목</Title>
            <Input
              fullWidth
              type="text"
              label="Outlined"
              name="request-title"
              placeholder="문의 제목을 입력해주세요...!"
            />
          </div>
          <div className="input-wrapper">
            <Title level={5}>문의 남기기</Title>
            <Textarea
              name="request-content"
              resize="vertical"
              placeholder="문의 내용을 입력해주세요...!"
              fullWidth
            />
          </div>
        </Form>
      </S.ModalBody>
      <S.ModalButtonArea>
        <Button color="primary" type="submit" fullWidth>
          완료
        </Button>
      </S.ModalButtonArea>
    </ModalLayout>
  );
};

export default RequestModal;
