import React from 'react';
import * as S from './styles';
import {
  HeartSVG as HeartButton,
  CartSVG as ShoppingCart,
} from '@/assets/svgs';
import { Link } from '@/lib/Router';
import wonFormat from '@/utils/wonFormat';

interface CardProps {
  bgColor: 'error' | 'primary'; // category 식으로 리스트화 (enum 등..) 필요
  linkId: number;
  discount?: number;
  src?: string;
  title: string;
  price: number;
}

const Card = ({ bgColor, linkId, discount, src, title, price }: CardProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('a 링크 이동 이벤트를 막자요');
  };

  return (
    <Link to={`/detail/${linkId}`}>
      <S.Card>
        <S.Liner bgColor={bgColor} />
        <S.ThumbnailWrapper>
          {discount && <S.NameTag>{discount}%</S.NameTag>}
          <img src={src} alt="상품 섬네일 이미지" />
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
          <h1 className="title">{title}</h1>
          <span className="price-tag">{wonFormat(price)}</span>
        </S.ProductDetails>
      </S.Card>
    </Link>
  );
};

export default Card;
