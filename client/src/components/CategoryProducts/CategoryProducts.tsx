import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { getCategoryProducts } from '@/lib/api/product';
import { IProduct } from '@/types';
import React, { useEffect, useState } from 'react';
import Card from '../Card';
import CardWrapper from '../CardWrapper';

interface IProps {
  subCategoryId: number;
}

const CategoryProducts = ({ subCategoryId }: IProps) => {
  const [start, setStart] = useState(0);
  const { ref, inView, data, fetchNextPage, remove } = useInfiniteScroll<
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
    if (inView && data?.pages[data.pages.length - 1].length == 20)
      setStart(start + 20);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    remove();
    return () => {
      setStart(0);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subCategoryId]);

  if (!data) return <div>nodata</div>;

  const renderCard = () => {
    return data.pages
      .flat()
      .map((item) => (
        <Card
          linkId={item.id}
          key={item.id}
          discount={item.discount}
          bgColor="primary"
          src={item.productImage[0].url}
          price={item.price}
          title={item.title}
        />
      ));
  };

  return (
    <>
      <CardWrapper>{renderCard()}</CardWrapper>
      <div ref={ref}></div>
    </>
  );
};

export default CategoryProducts;
