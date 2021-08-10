import React from 'react';
import { stationary } from '@/assets';
import { StyledMain } from './styles';

const Main = () => {
  return (
    <StyledMain>
      <h1>이곳은 메인 영역</h1>
      <p>React Frontend boilerplate</p>
      <img src={stationary} alt="default" />
    </StyledMain>
  );
};

export default Main;
