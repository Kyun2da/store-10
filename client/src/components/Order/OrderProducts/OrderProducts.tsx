import React from 'react';
import * as S from './styles';
import { wonFormat } from '@/utils/helper';
import { IOrderProduct } from '@/types';

interface IProps {
  products: IOrderProduct[];
}

const OrderProducts = ({ products }: IProps) => {
  return (
    <article>
      <S.OrderProductsHeader>
        <span>주문상품</span>
      </S.OrderProductsHeader>
      <S.OrderProductsList>
        {products.map((product) => (
          <S.OrderProductsItem key={product.id}>
            <S.ImgWrapper>
              <img src={product.img} />
            </S.ImgWrapper>
            <S.ItemInfo>
              <S.ItemInfoName>{product.title}</S.ItemInfoName>
              <S.ItemInfoPrice>
                {wonFormat(product.price)}
                <S.ItemInfoCount> · {product.count}개</S.ItemInfoCount>
              </S.ItemInfoPrice>
            </S.ItemInfo>
          </S.OrderProductsItem>
        ))}
      </S.OrderProductsList>
    </article>
  );
};

export default OrderProducts;
