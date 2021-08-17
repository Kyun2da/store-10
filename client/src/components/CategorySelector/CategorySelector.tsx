import { ExchageSVG, GiftSVG, PackageSVG } from '@/assets/svgs';
import React, { useState } from 'react';
import * as S from './styles';

const CategorySelector = () => {
  const [categoryId, setCategoryId] = useState('category-gift');

  const handleClickOnCategory = (e: React.MouseEvent) => {
    const target = (e.target as HTMLElement).closest('.each-category');
    console.log(target?.id);
    setCategoryId(target?.id ?? 'category-gift');
  };

  // 이것도 클래스명 일일이 비교하는 하드 코딩인데 나중에 고치겠습니다.

  return (
    <S.CategorySelector>
      <S.Category
        id="category-gift"
        onClick={handleClickOnCategory}
        className={
          'each-category' + (categoryId === 'category-gift' ? ' selected' : '')
        }
      >
        <GiftSVG width={60} height={60} />
        <span className="category-text">상품관련</span>
      </S.Category>

      <S.Category
        id="category-package"
        onClick={handleClickOnCategory}
        className={
          'each-category' +
          (categoryId === 'category-package' ? ' selected' : '')
        }
      >
        <PackageSVG width={60} height={60} />
        <span className="category-text">상품관련</span>
      </S.Category>

      <S.Category
        id="category-exchange"
        onClick={handleClickOnCategory}
        className={
          'each-category' +
          (categoryId === 'category-exchange' ? ' selected' : '')
        }
      >
        <ExchageSVG width={60} height={60} />
        <span className="category-text">상품관련</span>
      </S.Category>
    </S.CategorySelector>
  );
};

export default CategorySelector;
