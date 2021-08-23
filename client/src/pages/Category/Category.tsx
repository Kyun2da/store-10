import React from 'react';
import { useParams } from '@/lib/Router';
import * as S from './styles';
import CategoryProducts from '@/components/CategoryProducts';
import { CategoryList } from '@/recoil/category';
import { useRecoilValue } from 'recoil';
import { ISubCategory } from '@/types';

const Category = () => {
  const { categoryId = '40' } = useParams().params;
  const categories = useRecoilValue(CategoryList);

  const sub: ISubCategory = {
    id: 0,
    title: '',
  };

  const main = categories.find((_main) => {
    return _main.subCategories.find((_sub) => {
      if (_sub.id == +categoryId) {
        sub.id = _sub.id;
        sub.title = _sub.title;
        return true;
      }
      return;
    });
  });

  return (
    <S.CategoryWrapper>
      <S.CategoryHeader>{main?.title + ' > ' + sub.title}</S.CategoryHeader>
      <CategoryProducts subCategoryId={+categoryId} />
    </S.CategoryWrapper>
  );
};

export default Category;
