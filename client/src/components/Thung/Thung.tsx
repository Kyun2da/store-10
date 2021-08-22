import React from 'react';
import { thung } from '@/assets';
import * as S from './styles';

interface IThungProps {
  title: string;
}

const Thung = ({ title }: IThungProps) => {
  return (
    <S.ThungContainer>
      <img src={thung} />
      <S.Description>{title}</S.Description>
    </S.ThungContainer>
  );
};

export default Thung;
