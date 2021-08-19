import React from 'react';
import * as S from './styles';
import Card from '@/components/Card';
import CardWrapper from '@/components/CardWrapper';
import Banner from '@/components/Banner';
import { useGetMainProducts } from '@/hooks/queries/product';
import { IProduct } from '@/types';

const Main = () => {
  const [recommand, best, recent] = useGetMainProducts();

  const renderNewProducts = () => {
    if (recent.isLoading) {
      return <div>Loading</div>;
    }
    return recent.data.result.map((product: IProduct) => (
      <Card
        key={product.id}
        bgColor="primary"
        src={product.productImage[0].url}
        price={product.price}
        title={product.title}
      />
    ));
  };

  const renderRecommandProducts = () => {
    if (recommand.isLoading) {
      return <div>Loading</div>;
    }
    return recommand.data.result.map((product: IProduct) => (
      <Card
        key={product.id}
        bgColor="primary"
        src={product.productImage[0].url}
        price={product.price}
        title={product.title}
      />
    ));
  };

  const renderBestProducts = () => {
    if (best.isLoading) {
      return <div>Loading</div>;
    }
    return best.data.result.map((product: IProduct) => (
      <Card
        key={product.id}
        bgColor="primary"
        src={product.productImage[0].url}
        price={product.price}
        title={product.title}
      />
    ));
  };
  return (
    <>
      <Banner />
      <S.Main className="container">
        <h1 className="product-title">새로 나왔어요!</h1>
        <CardWrapper col={4}>{renderNewProducts()}</CardWrapper>

        <h1 className="product-title">이거는 어때요?</h1>
        <CardWrapper col={4}>{renderRecommandProducts()}</CardWrapper>

        <h1 className="product-title">제일 잘 나가요!</h1>
        <CardWrapper col={4}>{renderBestProducts()}</CardWrapper>
      </S.Main>
    </>
  );
};

export default Main;
