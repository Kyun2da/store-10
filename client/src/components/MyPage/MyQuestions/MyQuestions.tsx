import { PanelWrapper } from '@/components/ProductDetails/styles';
import React, { useState } from 'react';
import * as S from './styles';
import Collapse from '@/components/Shared/Collapse';
import Pagination from '@/components/Shared/Pagination';
import { DeleteConfirmModal } from '@/components/Shared/Modal';
import usePagination from '@/hooks/usePagination';
import useModal from '@/hooks/useModal';
import {
  useDeleteQuestion,
  useGetProductQuestionsByUser,
} from '@/hooks/queries/product';
import { MY_QUESTION_HEADER } from '@/utils/constant/CollapseHeaders';
import { QUESTION_LIMIT } from '@/utils/constant/offsetLimit';

const MyQuestions = () => {
  const [offset, handleOnClickPage] = usePagination(QUESTION_LIMIT);
  const [isOpenRemoveModal, toggleRemoveModal] = useModal(false);
  const [seletedQuestion, setSelectedQuestion] = useState(0);
  const { data, isLoading, error } = useGetProductQuestionsByUser(offset);
  const { mutate: removeQuestion } = useDeleteQuestion();

  if (isLoading || !data) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  const handleRemoveOnQuestion = () => {
    removeQuestion(seletedQuestion);
    toggleRemoveModal();
  };

  const handleRemoveQuestion = (target: number) => {
    setSelectedQuestion(target);
    toggleRemoveModal();
  };

  const dropdownItems = [
    {
      content: '수정하기',
      color: '#111',
      onClickListener: () => console.log('수정'),
    },
    {
      content: '삭제하기',
      color: '#f45452',
      onClickListener: handleRemoveQuestion,
    },
  ];

  const { questions, count } = data;

  return (
    <S.MyQuestions>
      <PanelWrapper>
        <Collapse
          headers={MY_QUESTION_HEADER}
          items={questions}
          noSecret={true}
          dropdownItems={dropdownItems}
          gaps="1fr 1fr 3fr 1fr 1fr"
        />

        <Pagination
          handleOnClickPage={handleOnClickPage}
          count={Math.ceil(count / QUESTION_LIMIT)}
        />
      </PanelWrapper>

      {isOpenRemoveModal && (
        <DeleteConfirmModal
          removeSelected={handleRemoveOnQuestion}
          toggleModal={toggleRemoveModal}
        />
      )}
    </S.MyQuestions>
  );
};

export default MyQuestions;
