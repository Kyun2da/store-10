import React from 'react';
import * as S from './style';

interface IInput {
  type: 'text' | 'password' | 'number';
  name: string;
  placeholder?: string;
}

const Input = ({ type, name, placeholder }: IInput) => {
  return <S.Input type={type} placeholder={placeholder} name={name} />;
};

export default Input;
