import { useGetSearchProducts } from '@/hooks/queries/product';
import React from 'react';
import Card from '../Card';
import CardWrapper from '../CardWrapper';
import * as S from './styles';

interface IProps {
  searchText: string;
}

const SearchProducts = ({ ...props }: IProps) => {
  const { searchText } = props;
  const { data, isLoading } = useGetSearchProducts(searchText);

  if (isLoading) {
    return <div>loading</div>;
  }
  if (!data || data.length == 0) {
    return (
      <S.EmptyComponent
        title={`${decodeURI(searchText)}에 해당하는 상품이 없어요!`}
      />
    );
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

  return <CardWrapper col={4}>{renderCard()}</CardWrapper>;
};

export default SearchProducts;
