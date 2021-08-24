import { ExchageSVG, GiftSVG, PackageSVG } from '@/assets/svgs';
import React, { useState } from 'react';
import * as S from './styles';

interface ICategorySelector {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const categories: Record<string, string> = {
  ['category-gift']: '상품',
  ['category-package']: '교환',
  ['category-exchange']: '환불',
};

const CategorySelector = ({ setCategory }: ICategorySelector) => {
  const [categoryId, setCategoryId] = useState('category-gift');

  const handleClickOnCategory = (e: React.MouseEvent) => {
    const target = (e.target as HTMLElement).closest('.each-category');
    setCategory(categories[target?.id ?? 'category-gift']);
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
        <span className="category-text">택배관련</span>
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
        <span className="category-text">환불관련</span>
      </S.Category>
    </S.CategorySelector>
  );
};

export default CategorySelector;
