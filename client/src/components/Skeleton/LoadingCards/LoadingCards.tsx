import { CardWrapper } from '@/components/CardWrapper/styles';
import React from 'react';
import CardSkeleton from '../CardSkeleton';
import { nanoid } from 'nanoid';

interface ILoadingCards {
  col: number;
  skeletonNum: number;
  showSkeleton: boolean;
  component: React.ReactNode;
}

interface ISkeletons {
  skeletonNum: number;
}

const Skeletons = ({ skeletonNum }: ISkeletons) => {
  return (
    <>
      {[...Array(skeletonNum)].map(() => (
        <CardSkeleton key={nanoid()} />
      ))}
    </>
  );
};

const LoadingCards = ({
  col,
  skeletonNum,
  showSkeleton,
  component,
}: ILoadingCards) => {
  return (
    <CardWrapper col={col}>
      {showSkeleton ? <Skeletons skeletonNum={skeletonNum} /> : component}
    </CardWrapper>
  );
};

export default LoadingCards;
