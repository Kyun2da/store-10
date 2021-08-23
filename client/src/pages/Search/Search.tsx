import React from 'react';
import { useParams } from '@/lib/Router';
import * as S from './styles';

const Search = () => {
  const { search } = useParams().params;

  return (
    <S.SearchWrapper>
      <S.SearchHeader>{`"${search}의 검색 결과 입니다."`}</S.SearchHeader>
      
    </S.SearchWrapper>
  );
};

export default Search;
