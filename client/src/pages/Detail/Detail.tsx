import React from 'react';
import * as S from './styles';
import { useParams } from '@/core/Router';
import { ProductDetailTab } from '@/components/Tab';
import ProductInfo from '@/components/ProductDetails/ProductInfo';

const Detail = () => {
  const { params } = useParams();
  console.log(params);

  return (
    <S.Detail>
      <ProductInfo />

      <ProductDetailTab />
    </S.Detail>
  );
};

export default Detail;
