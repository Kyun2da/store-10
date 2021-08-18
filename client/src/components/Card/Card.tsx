import React from 'react';
import * as S from './styles';
import {
  HeartSVG as HeartButton,
  CartSVG as ShoppingCart,
} from '@/assets/svgs';
import { Link } from '@/lib/Router';

interface CardProps {
  bgColor: 'error' | 'primary'; // category 식으로 리스트화 (enum 등..) 필요
  discount?: number;
}

const Card = ({ bgColor, discount }: CardProps) => {
  // 나중에 데이터를 가져와서 넣어주는 식으로 바꾸어 봅시다

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('a 링크 이동 이벤트를 막자요');
  };

  return (
    <Link to="/detail/1">
      <S.Card>
        <S.Liner bgColor={bgColor} />
        <S.ThumbnailWrapper>
          {discount && <S.NameTag>{discount}%</S.NameTag>}
          <img
            src="https://store-10.s3.ap-northeast-2.amazonaws.com/test/test.jpeg"
            alt="상품 섬네일 이미지"
          />
          <S.BottomBar onClick={handleClick}>
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
          <span className="price-tag">1,500원</span>
        </S.ProductDetails>
      </S.Card>
    </Link>
  );
};

export default Card;
