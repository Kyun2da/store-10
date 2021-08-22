import React from 'react';
import * as S from './styles';
import { IRating } from '@/types';
import { nanoid } from 'nanoid';

interface IRatingChart {
  ratings: IRating[];
}

const RatingChart = ({ ratings }: IRatingChart) => {
  ratings.sort((a, b) => b.rating - a.rating);

  return (
    <S.RatingChart>
      {ratings.map((rating) => (
        <S.ChartBar key={nanoid()} count={+rating.count}>
          <div className="bar"></div>
          <div className="text">{rating.rating}점</div>
          <span className="hover-text">{rating.count}명</span>
        </S.ChartBar>
      ))}
    </S.RatingChart>
  );
};

export default RatingChart;
