import Table from '@/components/Shared/Table';
import Title from '@/components/Shared/Title';
import React from 'react';
import * as S from '../styles';

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
  return (
    <S.PanelWrapper>
      <Title level={5} className="title">
        상품문의
      </Title>
      <Table fullWidth headers={headers} items={items} />
    </S.PanelWrapper>
  );
};

export default ProductRequest;
