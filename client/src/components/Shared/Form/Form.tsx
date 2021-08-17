import React from 'react';
import * as S from './styles';

export interface IForm {
  children: React.ReactNode;
  gap?: number;
}

const Form = ({ children, gap }: IForm) => {
  return <S.Form gap={gap}>{children}</S.Form>;
};

export default Form;
