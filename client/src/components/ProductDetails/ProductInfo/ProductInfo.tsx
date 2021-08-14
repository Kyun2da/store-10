import React from 'react';
import * as S from './styles';
import { HeartSVG, CartSVG } from '@/assets/svgs';
import { NumberInput } from '@/components/Input';

const ProductInfo = () => {
  return (
    <S.ProductInfo>
      <S.ProductThumbnail
        src="https://store-10.s3.ap-northeast-2.amazonaws.com/test/test.jpeg"
        alt="상품 섬네일 이미지"
      />
      <S.ProductOrder>
        <h1 className="title">반반휴지. 물반휴지반</h1>
        <S.ProductDetailArea>
          <S.ProductDetail>
            <h3 className="detail-tag">판매가격</h3>
            <span className="detail-content">1,500원</span>
          </S.ProductDetail>
          <S.ProductDetail>
            <h3 className="detail-tag">배송정보</h3>
            <span className="detail-content">
              2,500원 (3만원 이상 구매시 무료)
            </span>
          </S.ProductDetail>
          <S.ProductDetail>
            <h3 className="detail-tag">배송마감</h3>
            <span className="detail-content">오후 2시 당일배송마감</span>
          </S.ProductDetail>
        </S.ProductDetailArea>

        <S.OrderBar>
          <p className="product-name">반반휴지. 물반휴지반</p>
          <NumberInput
            type="number"
            name="price-count"
            min={1}
            defaultValue={1}
          />
          <p className="price">1,500원</p>
        </S.OrderBar>

        <S.Divider />

        <S.PriceBar>
          <h3 className="price-tag">총 합계금액</h3>
          <span className="price-sum">1,500원</span>
        </S.PriceBar>

        <S.ButtonArea>
          <button className="heart">
            <HeartSVG width={25} height={25} />
          </button>
          <button className="cart">
            <CartSVG width={25} height={25} />
          </button>
          <button className="purchase">바로구매</button>
        </S.ButtonArea>
      </S.ProductOrder>
    </S.ProductInfo>
  );
};

export default ProductInfo;
