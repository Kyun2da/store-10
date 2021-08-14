import React from 'react';
import * as S from './styles';
import { useParams } from '@/core/Router';

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
    <S.Description>
      <h1 className="title">상품 상세정보</h1>
      {descriptions.map((description) => {
        // 임시로 사용할 고유 key - 콘솔 에러가 불---편해서 임시용입니다
        const tempRandomString = Math.random().toString(36).substr(2, 11);

        return (
          <img
            key={tempRandomString}
            src={description}
            alt="상품 상세정보 이미지"
          />
        );
      })}
    </S.Description>
  );
};

export default ProductDescription;
