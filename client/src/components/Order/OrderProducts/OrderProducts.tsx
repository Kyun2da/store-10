import React from 'react';
import * as S from './styles';
import { wonFormat } from '@/utils/helper';
import { IOrderProduct } from '@/types';
import Image from '@/components/Shared/Image';

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
              <Image src={product.img} alt="주문상품 이미지" />
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
