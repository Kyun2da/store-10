import React from 'react';
import { stationary } from '@/assets';
import Stationery from '@/assets/stationery.svg';
import styled from 'styled-components';
import Header from '@/Components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <p>React Frontend boilerplate</p>
      <img src={stationary} alt="default" />
      <Stationery />
      <StyledTest>styled component test</StyledTest>
    </div>
  );
};

export default App;

const StyledTest = styled.div`
  color: red;
  border: 2px solid black;
`;
