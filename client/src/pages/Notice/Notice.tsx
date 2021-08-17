import Collapse from '@/components/Shared/Collapse';
import Title from '@/components/Shared/Title';
import React from 'react';
import * as S from './styles';
import { items } from '@/utils/constant/notices';

const headers = [
  { name: '번호', value: 'number' },
  { name: '제목', value: 'title' },
  { name: '작성일', value: 'date' },
  { name: '작성자', value: 'username' },
];

const Notice = () => {
  return (
    <S.Notice className="container">
      <Title level={4} className="title">
        공지사항
      </Title>
      <Collapse
        forNotice
        headers={headers}
        items={items}
        gaps="1fr 3fr 1fr 1fr"
      ></Collapse>
    </S.Notice>
  );
};

export default Notice;
