import React from 'react';
import * as S from './styles';
import Card from '@/components/Card';
import CardWrapper from '@/components/CardWrapper';
import Banner from '@/components/Banner';
import {
  useGetRecommandProducts,
  useGetBestProducts,
  useGetRecentProducts,
} from '@/hooks/queries/product';
import { IProduct } from '@/types';
import { useGetBookmarkIds } from '@/hooks/queries/bookmark';

export interface IProductQuery {
  data: IProduct[] | undefined;
  isLoading: boolean;
}

const Main = () => {
  const recommandQuery = useGetRecommandProducts();
  const bestQuery = useGetBestProducts();
  const recentQuery = useGetRecentProducts();
  const { data: bookmarkIdList } = useGetBookmarkIds();

  const renderProducts = (qurey: IProductQuery) => {
    const { data, isLoading } = qurey;
    if (isLoading || !data) {
      return <div></div>;
    }
    return data.map((product: IProduct) => (
      <Card
        key={product.id}
        linkId={product.id}
        bgColor="primary"
        src={product.productImage[0].url}
        price={product.price}
        title={product.title}
        bookmarkList={bookmarkIdList}
      />
    ));
  };
  return (
    <>
      <Banner />
      <S.Main className="container">
        <h1 className="product-title">새로 나왔어요!</h1>
        <CardWrapper col={4}>{renderProducts(recentQuery)}</CardWrapper>

        <h1 className="product-title">이거는 어때요?</h1>
        <CardWrapper col={4}>{renderProducts(recommandQuery)}</CardWrapper>

        <h1 className="product-title">제일 잘 나가요!</h1>
        <CardWrapper col={4}>{renderProducts(bestQuery)}</CardWrapper>
      </S.Main>
    </>
  );
};

export default Main;
