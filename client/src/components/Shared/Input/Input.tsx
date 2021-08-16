import React from 'react';
import * as S from './style';

export interface IInput {
  type: 'text' | 'password' | 'number';
  label: 'Standard' | 'Filled' | 'Outlined';
  name: string;
  placeholder?: string;
}

const Input = ({ type, label, name, placeholder }: IInput) => {
  return (
    <S.Input type={type} label={label} placeholder={placeholder} name={name} />
  );
};

export default Input;
