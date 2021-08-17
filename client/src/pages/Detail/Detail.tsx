import React from 'react';
import * as S from './styles';
import { useParams } from '@/lib/Router';
import { ProductDetailTab } from '@/components/Shared/Tab';
import ProductInfo from '@/components/ProductDetails/ProductInfo';

const Detail = () => {
  const { params } = useParams();
  console.log(params);

  return (
    <S.Detail className="container">
      <ProductInfo />

      <ProductDetailTab />
    </S.Detail>
  );
};

export default Detail;
