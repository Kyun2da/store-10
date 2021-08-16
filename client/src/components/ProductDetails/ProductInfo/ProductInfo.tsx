import React from 'react';
import * as S from '../styles';
import { HeartSVG, CartSVG } from '@/assets/svgs';
import { NumberInput } from '@/components/Shared/Input';
import Title from '@/components/Shared/Title';
import useNumberInput from '@/hooks/useNumberInput';
import { wonFormat } from '@/helper';

// 요런 식으로 데이터가 전달되어야 하려나아아
const productInfoData = {
  title: '반반휴지. 물반휴지반',
  price: 1500,
  details: [
    {
      'sub-title': '판매가격',
      'content': '1,500원',
    },
    {
      'sub-title': '배송정보',
      'content': '2,500원 (3만원 이상 구매시 무료)',
    },
    {
      'sub-title': '배송마감',
      'content': '오후 2시 당일배송마감',
    },
  ],
};

const ProductInfo = () => {
  const { title, price, details } = productInfoData;
  const [value, handleClickOnMinus, handleClickOnPlus] = useNumberInput(1);

  return (
    <S.ProductInfo>
      <S.ProductThumbnail
        src="https://store-10.s3.ap-northeast-2.amazonaws.com/test/test.jpeg"
        alt="상품 섬네일 이미지"
      />
      <S.ProductOrder>
        <Title level={3}>{title}</Title>
        <S.ProductDetailArea>
          {details.map((detail) => {
            // 임시로 사용할 고유 key - 콘솔 에러가 불---편해서 임시용입니다
            // uuid 깔기 귀찮아잉
            const tempRandomString = Math.random().toString(36).substr(2, 11);
            return (
              <S.ProductDetail key={tempRandomString}>
                <Title level={5}>{detail['sub-title']}</Title>
                <span className="detail-content">{detail.content}</span>
              </S.ProductDetail>
            );
          })}
        </S.ProductDetailArea>

        <S.OrderBar>
          <p className="product-name">{title}</p>
          <NumberInput
            type="number"
            name="price-count"
            min={1}
            value={value}
            handleClickOnMinus={handleClickOnMinus}
            handleClickOnPlus={handleClickOnPlus}
          />
          <p className="price">{wonFormat(price)}</p>
        </S.OrderBar>

        <S.Divider />

        <S.PriceBar>
          <Title level={5}>총 합계금액</Title>
          <span className="price-sum">{wonFormat(price * value)}</span>
        </S.PriceBar>

        {/* LINK 이동 및 버튼 클릭 핸들러 구현해야함 */}
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
