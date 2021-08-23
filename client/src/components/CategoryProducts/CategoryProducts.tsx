import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { getCategoryProducts } from '@/lib/api/product';
import { IProduct } from '@/types';
import React, { useCallback, useEffect, useState } from 'react';
import Card from '../Card';
import CardWrapper from '../CardWrapper';

interface IProps {
  subCategoryId: number;
}

const CategoryProducts = ({ ...props }: IProps) => {
  const [start, setStart] = useState(0);
  const subCategoryId = props.subCategoryId;

  const { ref, inView, data, isLoading, fetchNextPage } = useInfiniteScroll<
    IProduct[]
  >({
    key: ['category', subCategoryId],
    fetchingFunction: getCategoryProducts,
    fetchParams: {
      start,
      subCateogry: subCategoryId,
      orderType: 'createdAt',
    },
  });

  const getMore = useCallback(() => {
    // 임시 조치
    if (start < 60) {
      setStart(start + 20);
    }
  }, [start]);

  useEffect(() => {
    if (start != 0) {
      fetchNextPage({
        pageParam: {
          start: start,
        },
      });
    }
  }, [fetchNextPage, start]);

  useEffect(() => {
    if (inView) getMore();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    setStart(0);
  }, [subCategoryId]);

  if (isLoading) {
    return <div>loading</div>;
  }
  if (!data) return <div>nodata</div>;

  const renderCard = () => {
    const MapData = new Map();
    data.pages.flat().forEach((item) => MapData.set(item.id, item));
    return Array.from(MapData, ([, value]) => value).map((item) => (
      <Card
        linkId={item.id}
        key={item.id}
        bgColor="primary"
        src={item.productImage[0].url}
        price={item.price}
        title={item.title}
      />
    ));
  };

  return (
    <>
      <CardWrapper col={4}>{renderCard()}</CardWrapper>
      <div ref={ref}></div>
    </>
  );
};

export default CategoryProducts;
