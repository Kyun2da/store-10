import Button from '@/components/Shared/Button';
import Title from '@/components/Shared/Title';
import React from 'react';
import * as S from '../styles';
import useModal from '@/hooks/useModal';
import { RequestModal } from '@/components/Shared/Modal';
import Collapse from '@/components/Shared/Collapse';
import {
  useGetProductQuestionById,
  useGetProductQuestionCount,
} from '@/hooks/queries/product';
import { useParams } from '@/lib/Router';
import Pagination from '@/components/Shared/Pagination';
import usePagination from '@/hooks/usePagination';

const LIMIT = 10;

const headers = [
  { name: '번호', value: 'id' },
  { name: '제목', value: 'title' },
  { name: '작성자', value: 'name' },
  { name: '작성일', value: 'createdAt' },
  { name: '답변', value: 'answer' },
];

const ProductRequest = () => {
  const { id } = useParams().params;
  const [offset, handleOnClickPage] = usePagination(LIMIT);
  const [isOpen, toggleModal] = useModal(false);
  const {
    data: questions,
    isLoading,
    error,
  } = useGetProductQuestionById(id, offset);
  const { data: count } = useGetProductQuestionCount(id);

  if (isLoading || !questions || !count) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  console.log(questions, count);

  return (
    <S.PanelWrapper>
      <S.TopArea>
        <Title className="title" level={5}>
          상품문의 ({count.count})
        </Title>
        <Button
          size="Default"
          color="primary"
          type="button"
          onClick={toggleModal}
        >
          작성하기
        </Button>
      </S.TopArea>

      <Collapse
        headers={headers}
        items={questions}
        gaps="1fr 3fr 1fr 1fr 1fr"
      />

      <Pagination
        handleOnClickPage={handleOnClickPage}
        count={Math.ceil(count.count / LIMIT)}
      />

      {isOpen && <RequestModal toggleModal={toggleModal} />}
    </S.PanelWrapper>
  );
};

export default ProductRequest;
