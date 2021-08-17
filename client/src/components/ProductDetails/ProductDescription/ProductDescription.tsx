import React from 'react';
import * as S from '../styles';
import { useParams } from '@/lib/Router';
import Title from '@/components/Shared/Title';

const ProductDescription = () => {
  const { id } = useParams().params;
  console.log(id);

  // TODO: id로 해당 영역의 세부 정보 이미지 가져오기

  const descriptions = [
    'https://store-10.s3.ap-northeast-2.amazonaws.com/test/details/detail1-1.jpg',
    'https://store-10.s3.ap-northeast-2.amazonaws.com/test/details/detail1-2.gif',
    'https://store-10.s3.ap-northeast-2.amazonaws.com/test/details/detail1-3.jpg',
    'https://store-10.s3.ap-northeast-2.amazonaws.com/test/details/detail1-4.gif',
    'https://store-10.s3.ap-northeast-2.amazonaws.com/test/details/detail1-5.jpg',
  ];

  return (
    <S.PanelWrapper>
      <Title level={5} className="title">
        상품 상세정보
      </Title>
      {descriptions.map((description) => {
        // 임시로 사용할 고유 key - 콘솔 에러가 불---편해서 임시용입니다
        // Intersection Observer를 달던 다른 라이브러리를 추가하든 해서
        // Lazy loading을 추가해도 좋을 거 같으네요~~
        const tempRandomString = Math.random().toString(36).substr(2, 11);

        return (
          <img
            key={tempRandomString}
            src={description}
            alt="상품 상세정보 이미지"
          />
        );
      })}
    </S.PanelWrapper>
  );
};

export default ProductDescription;
