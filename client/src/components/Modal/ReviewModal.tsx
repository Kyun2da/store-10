import React, { VFC } from 'react';
import { Input } from '../Input/style';
import Rating from '../Rating';
import Title from '../Title';
import ModalLayout from './ModalLayout';
import * as S from './styles';

interface PolicyModalProps {
  toggleModal: () => void;
}

// TODO: Input 타입을 조금 더 만들어야 하겠군뇨 호호호

const PolicyModal: VFC<PolicyModalProps> = ({ toggleModal }) => {
  return (
    <ModalLayout toggleModal={toggleModal}>
      <S.ModalHeader>상품후기 작성</S.ModalHeader>
      <S.ModalDivider />
      <S.ModalBody>
        <Title level={5}>별점 매기기</Title>
        <Rating rating={4} uniqueId="thisisuniqueid" />
        <Title level={5}>사진 업로드 (최대 3장)</Title>
        <input type="file" />
        <Title level={5}>리뷰 남기기</Title>
        <Input
          type="text"
          label="Outlined"
          name="user-review"
          placeholder="다른 구매자와 판매자에게 도움이 될 수 있도록 자세하고 솔직하게 리뷰를 작성해 주세요~ :)"
        />
        <div>
          아아~~ 모달 만들기 귀찮타~~~ 별점 매기는 컴포넌트 만들기 귀찮다~~~
          사진 업로드 만들기 귀찮다아아 만들어 주세요오 징징징
        </div>
      </S.ModalBody>
      <S.ModalButtonArea>
        <S.ModalButton>확인</S.ModalButton>
      </S.ModalButtonArea>
    </ModalLayout>
  );
};

export default PolicyModal;
