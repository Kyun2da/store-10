import { useParams } from '@/lib/Router';
import React from 'react';
import * as S from './styles';

const Category = () => {
  const { categoryId } = useParams().params;



  return (
    <S.CategoryWrapper>
      <S.CategoryHeader>{categoryId as string}번 카테고리 입니다</S.CategoryHeader>
      카테고리페이지입니다 이게 써치 페이지일 수 도 있을것 같아요~?
    </S.CategoryWrapper>
  );
};

export default Category;
