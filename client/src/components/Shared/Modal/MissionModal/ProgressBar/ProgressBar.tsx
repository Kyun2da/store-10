import React from 'react';
import * as S from './styles';

export interface ProgressProps {
  width?: number;
  height?: number;
  percent: number;
}

const ProgressBar = ({ width, height, percent }: ProgressProps) => {
  return (
    <S.ProgressBarContainer
      width={width}
      height={height}
      percent={100 - percent}
    >
      <g className="progress-container">
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          strokeWidth="20"
          strokeLinecap="round"
        />
      </g>
      <g className="progress-content">
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          strokeLinecap="round"
          fill="transparent"
          strokeWidth="20"
        />
      </g>
    </S.ProgressBarContainer>
  );
};

export default ProgressBar;
