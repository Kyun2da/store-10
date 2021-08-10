import React from 'react';
import { StyledDetail } from './styles';
import Stationery from '@/assets/stationery.svg';

const Detail = () => {
  return (
    <StyledDetail>
      <h1>이곳은 디테일 페이지 영역</h1>
      <p>안녕하세요 디테일 입니다</p>
      <Stationery />
    </StyledDetail>
  );
};

export default Detail;
