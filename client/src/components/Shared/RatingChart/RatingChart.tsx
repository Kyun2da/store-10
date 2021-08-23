import React from 'react';
import * as S from './styles';
import { IRating } from '@/types';
import { nanoid } from 'nanoid';
import { calculateRatio } from '@/utils/helper';

interface IRatingChart {
  ratings: IRating[];
  total: number;
}

const RatingChart = ({ ratings, total }: IRatingChart) => {
  ratings.sort((a, b) => b.rating - a.rating);

  return (
    <S.RatingChart>
      {ratings.map((rates) => {
        const { count, rating } = rates;
        return (
          <S.ChartBar key={nanoid()} count={calculateRatio({ total, count })}>
            <div className="bar"></div>
            <div className="text">{rating}점</div>
            <span className="hover-text">{count}명</span>
          </S.ChartBar>
        );
      })}
    </S.RatingChart>
  );
};

export default RatingChart;
