import React, { useState } from 'react';
import Button from '@/components/Shared/Button';
import { Input } from '@/components/Shared/Input';
import Title from '@/components/Shared/Title';
import ModalLayout from './ModalLayout';
import * as S from './styles';
import { ExchageSVG, GiftSVG, PackageSVG } from '@/assets/svgs';
import { Textarea } from '@/components/Shared/Input';

interface RequestModalProps {
  toggleModal: () => void;
}

const RequestModal = ({ toggleModal }: RequestModalProps) => {
  const [categoryId, setCategoryId] = useState('category-1');

  const handleClickOnCategory = (e: React.MouseEvent) => {
    const target = (e.target as HTMLElement).closest('.each-category');
    setCategoryId(target?.id ?? 'category-1');
  };

  return (
    <ModalLayout toggleModal={toggleModal}>
      <S.ModalHeader>상품문의 작성</S.ModalHeader>
      <S.ModalDivider />
      <S.ModalBody>
        <S.Form>
          <Title level={5}>문의 유형</Title>
          <div className="category-selection">
            <div
              id="category-1"
              className={
                'each-category' +
                (categoryId === 'category-1' ? ' selected' : '')
              }
              onClick={handleClickOnCategory}
            >
              <GiftSVG width={60} height={60} />
              <span className="category-text">상품관련</span>
            </div>
            <div
              id="category-2"
              className={
                'each-category' +
                (categoryId === 'category-2' ? ' selected' : '')
              }
              onClick={handleClickOnCategory}
            >
              <PackageSVG width={60} height={60} />
              <span className="category-text">배송관련</span>
            </div>
            <div
              id="category-3"
              className={
                'each-category' +
                (categoryId === 'category-3' ? ' selected' : '')
              }
              onClick={handleClickOnCategory}
            >
              <ExchageSVG width={60} height={60} />
              <span className="category-text">교환/환불관련</span>
            </div>
          </div>
        </S.Form>
        <S.Form>
          <Title level={5}>문의 제목</Title>
          <Input
            fullWidth
            type="text"
            label="Outlined"
            name="request-title"
            placeholder="문의 제목을 입력해주세요...!"
          />
        </S.Form>
        <S.Form>
          <Title level={5}>문의 남기기</Title>
          <Textarea
            name="request-content"
            resize="vertical"
            placeholder="문의 내용을 입력해주세요...!"
            fullWidth
          />
        </S.Form>
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
