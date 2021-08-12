import React from 'react';
import * as S from './styles';

const CardWrapper = ({
  children,
  col,
}: {
  children: React.ReactElement | React.ReactElement[];
  col: number;
}) => {
  return <S.CardWrapper col={col}>{children}</S.CardWrapper>;
};

export default CardWrapper;
