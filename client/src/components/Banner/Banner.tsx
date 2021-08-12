import React from 'react';
import * as S from './styles';

const Banner = () => {
  return (
    <>
      <S.Banner className="pc_resolution">
        이곳은 PC 전용 배너입니다
        <p>1050px 해상도 부터 출력</p>
      </S.Banner>
      <S.Banner className="tablet_resolution">
        이곳은 태블릿 전용 배너입니다
        <p>768px 해상도 부터 출력</p>
      </S.Banner>
      <S.Banner className="phone_resolution">
        이곳은 모바일 전용 배너입니다
        <p>425px 해상도 부터 출력</p>
      </S.Banner>
    </>
  );
};

export default Banner;
