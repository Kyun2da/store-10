import React from 'react';
import * as S from './styles';

const RatingChart = () => {
  // TODO: 퍼센트 계산은 손을 좀 많이 봐야 되어유..
  // 지금은 야매로다 그냥 대충 했습니다

  return (
    <S.RatingChart>
      <S.ChartBar count={8}>
        <div className="bar"></div>
        <div className="text">5점</div>
        <span className="hover-text">8명</span>
      </S.ChartBar>

      <S.ChartBar count={6}>
        <div className="bar"></div>
        <div className="text">4점</div>
        <span className="hover-text">6명</span>
      </S.ChartBar>

      <S.ChartBar count={1}>
        <div className="bar"></div>
        <div className="text">3점</div>
        <span className="hover-text">1명</span>
      </S.ChartBar>

      <S.ChartBar>
        <div className="bar"></div>
        <div className="text">2점</div>
        <span className="hover-text">0명</span>
      </S.ChartBar>

      <S.ChartBar count={1}>
        <div className="bar"></div>
        <div className="text">1점</div>
        <span className="hover-text">1명</span>
      </S.ChartBar>
    </S.RatingChart>
  );
};

export default RatingChart;
