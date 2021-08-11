import React from 'react';
import { stationary } from '@/assets';
import { useHistory } from '@/core/Router';
import * as S from './styles';

const Main = () => {
  const history = useHistory();
  console.log(history);

  return (
    <S.Main>
      <h1>이곳은 메인 영역</h1>
      <p>React Frontend boilerplate</p>
      <img src={stationary} alt="default" />
    </S.Main>
  );
};

export default Main;
