import React, { useState } from 'react';
import * as S from './styles';
import Card from '@/components/Card';
import CardWrapper from '@/components/CardWrapper';
import Banner from '@/components/Banner';
import { useModal } from '@/hooks/useModal';
import { PolicyModal } from '@/components/Modal';
import { TabExample } from '@/components/Tab';

const Main = () => {
  const { isOpen, toggleModal } = useModal(false);

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
          <S.ToggleButton onClick={toggleModal}>모달테스트</S.ToggleButton>
        </CardWrapper>

        <h1 className="product-title">베스트상품 (Props: Grid Column 3)</h1>
        <CardWrapper col={3}>
          <Card bgColor="error" />
          <Card bgColor="error" />
          <Card bgColor="error" />
          <Card bgColor="error" discount={25} />
          <Card bgColor="error" />
        </CardWrapper>

        <TabExample />

        {isOpen && <PolicyModal toggleModal={toggleModal} />}
      </S.Main>
    </>
  );
};

export default Main;
