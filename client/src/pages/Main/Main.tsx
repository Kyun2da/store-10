import React from 'react';
import { useHistory } from '@/core/Router';
import * as S from './styles';
import Card from '@/components/Card';
import CardWrapper from '@/components/CardWrapper';
import Banner from '@/components/Banner';

const Main = () => {
  const history = useHistory();
  console.log(history);

  return (
    <>
      <Banner />
      <S.Main className="container">
        <h1 className="product-title">히트상품 (Props: Grid Column 4)</h1>
        <CardWrapper col={4}>
          <Card bgColor="primary" discount={50} />
          <Card bgColor="primary" />
          <Card bgColor="primary" />
          <Card bgColor="primary" discount={10} />
          <Card bgColor="primary" />
        </CardWrapper>

        <h1 className="product-title">베스트상품 (Props: Grid Column 3)</h1>
        <CardWrapper col={3}>
          <Card bgColor="error" />
          <Card bgColor="error" />
          <Card bgColor="error" />
          <Card bgColor="error" discount={25} />
          <Card bgColor="error" />
        </CardWrapper>
      </S.Main>
    </>
  );
};

export default Main;
