import React from 'react';
import { useParams } from '@/lib/Router';
import * as S from './styles';
import { useGetSearchProducts } from '@/hooks/queries/product';
import CardWrapper from '@/components/CardWrapper';
import Card from '@/components/Card';
import Thung from '@/components/Thung';

const Search = () => {
  const { search } = useParams().params;
  const { data, isLoading } = useGetSearchProducts(search);

  if (isLoading) {
    return <div>loading</div>;
  }
  if (!data || data.length == 0) {
    return <Thung title={`${decodeURI(search)}에 해당하는 상품이 없어요!`} />;
  }

  const renderCard = () => {
    return data.map((item) => (
      <Card
        linkId={item.id}
        key={item.id}
        bgColor="primary"
        src={item.productImage[0].url}
        price={item.price}
        title={item.title}
      />
    ));
  };

  return (
    <S.SearchWrapper>
      <S.SearchHeader>{`"${decodeURI(
        search
      )}"의 검색 결과 입니다.`}</S.SearchHeader>
      <CardWrapper col={4}>{renderCard()}</CardWrapper>
    </S.SearchWrapper>
  );
};

export default Search;
