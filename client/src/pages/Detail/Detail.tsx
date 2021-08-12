import React from 'react';
import * as S from './styles';
import Stationery from '@/assets/svgs/stationery.svg';
import { useParams } from '@/core/Router';

const Detail = () => {
  const { params } = useParams();
  console.log(params);

  return (
    <S.Detail>
      <h1>이곳은 디테일 페이지 영역 #{params.id}</h1>
      <p>안녕하세요 디테일 입니다</p>
      <Stationery />
    </S.Detail>
  );
};

export default Detail;
