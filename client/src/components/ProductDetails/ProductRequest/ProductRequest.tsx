import Button from '@/components/Shared/Button';
import Table from '@/components/Shared/Table';
import Title from '@/components/Shared/Title';
import React from 'react';
import * as S from '../styles';
import useModal from '@/hooks/useModal';
import { RequestModal } from '@/components/Shared/Modal';

const headers = [
  { name: '번호', value: 'number' },
  { name: '제목', value: 'title' },
  { name: '작성자', value: 'username' },
  { name: '작성일', value: 'date' },
  { name: '답변', value: 'check' },
];

const items = [
  {
    id: 1,
    number: '1',
    title: '재구매 문의',
    username: '우아한개발자',
    date: '2021-08-21',
    check: '미답변',
  },
  {
    id: 2,
    number: '2',
    title: '품질 퀄리티 문의',
    username: '우아한퀄리티',
    date: '2021-08-21',
    check: '미답변',
  },
  {
    id: 3,
    number: '3',
    title: '아니 장사를 이딴 식으로 하면',
    username: '우아한불편러',
    date: '2021-08-21',
    check: '완료',
  },
  {
    id: 4,
    number: '4',
    title: '입점 문의',
    username: '우아한매니저',
    date: '2021-08-21',
    check: '완료',
  },
];

const ProductRequest = () => {
  const [isOpen, toggleModal] = useModal(false);

  return (
    <S.PanelWrapper>
      <S.TopArea>
        <Title className="title" level={5}>
          상품문의 ({items.length})
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

      <Table fullWidth headers={headers} items={items} />

      {isOpen && <RequestModal toggleModal={toggleModal} />}
    </S.PanelWrapper>
  );
};

export default ProductRequest;
