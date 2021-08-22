import React from 'react';
import * as S from './styles';

const items = [];

const OrderProducts = () => {
  return (
    <article>
      <S.OrderProductsHeader>
        <span>주문상품</span>
      </S.OrderProductsHeader>
      <S.OrderProductsList>
        <S.OrderProductsItem>
          <S.ImgWrapper>
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
          </S.ImgWrapper>
          <S.ItemInfo>
            <S.ItemInfoName>반 반 휴지. 물 반 휴지 반</S.ItemInfoName>
            <S.ItemInfoPrice>
              59300원
              <S.ItemInfoCount> · 3개</S.ItemInfoCount>
            </S.ItemInfoPrice>
          </S.ItemInfo>
        </S.OrderProductsItem>
        <S.OrderProductsItem>
          <S.ImgWrapper>
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
          </S.ImgWrapper>
          <S.ItemInfo>
            <S.ItemInfoName>반 반 휴지. 물 반 휴지 반</S.ItemInfoName>
            <S.ItemInfoPrice>
              59300원
              <S.ItemInfoCount> · 3개</S.ItemInfoCount>
            </S.ItemInfoPrice>
          </S.ItemInfo>
        </S.OrderProductsItem>
      </S.OrderProductsList>
    </article>
  );
};

export default OrderProducts;
