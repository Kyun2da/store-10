import React from 'react';
import * as S from '../styles';
import { useParams } from '@/lib/Router';
import Title from '@/components/Shared/Title';
import { nanoid } from 'nanoid';
import { useGetProductById } from '@/hooks/queries/product';
import contentParser from '@/utils/contentParser';

const ProductDescription = () => {
  const { id } = useParams().params;

  const { data, isLoading, error } = useGetProductById(id);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading || !data) {
    return null;
  }

  const { content } = data.details;
  const { details, essentials } = content;
  const [images, tables] = contentParser({ details, essentials });

  return (
    <S.PanelWrapper>
      <Title level={5} className="title">
        상품 상세정보
      </Title>

      <S.ProductTable>
        {tables.map((table) => (
          <S.ProductTableRow key={nanoid()}>
            <div className="table-title">{table.title}</div>
            <span>{table.description}</span>
          </S.ProductTableRow>
        ))}
      </S.ProductTable>

      {images.map((image) => {
        return <img key={nanoid()} src={image} alt="상품 상세정보 이미지" />;
      })}
    </S.PanelWrapper>
  );
};

export default ProductDescription;
