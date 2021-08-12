import React, { VFC } from 'react';
import * as S from './styles';
import HeartButton from '@/assets/like.svg';
import ShoppingCart from '@/assets/shoppingCart.svg';

interface CardProps {
  bgColor: 'error' | 'primary'; // category 식으로 리스트화 (enum 등..) 필요
  discount?: number;
}

const Card: VFC<CardProps> = ({ bgColor, discount }) => {
  // 나중에 데이터를 가져와서 넣어주는 식으로 바꾸어 봅시다
  return (
    <S.Card>
      <S.Liner bgColor={bgColor} />
      <S.ThumbnailWrapper>
        {discount && <S.NameTag>{discount}%</S.NameTag>}
        <img
          src="https://lh3.googleusercontent.com/proxy/gbPVfU7suICYMcyEoL5krnKmLW5RgdO_M5Qz4I2QF_mNcHu2r84djyTRwnu9JNMtxr3mfOUcgp9THnAOw6agbRVqXgHhk7BbwYIJw1C4umc1mS2EF_VnosEZqco"
          alt="상품 섬네일 이미지"
        />
        <S.BottomBar>
          <S.ButtonArea>
            <HeartButton witdh={24} height={24} />
          </S.ButtonArea>
          <S.ButtonArea>
            <ShoppingCart witdh={24} height={24} />
          </S.ButtonArea>
        </S.BottomBar>
      </S.ThumbnailWrapper>
      <S.ProductDetails>
        <h1 className="title">반반휴지. 물반휴지반</h1>
        <text className="price-tag">1,500원</text>
      </S.ProductDetails>
    </S.Card>
  );
};

export default Card;
