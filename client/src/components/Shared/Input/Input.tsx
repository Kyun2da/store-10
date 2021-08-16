import React from 'react';
import * as S from './style';

export interface IInput {
  type: 'text' | 'password' | 'number';
  label: 'Standard' | 'Filled' | 'Outlined';
  name: string;
  placeholder?: string;
  fullWidth?: boolean;
}

const Input = ({ type, label, name, placeholder, fullWidth }: IInput) => {
  return (
    <S.Input
      type={type}
      label={label}
      placeholder={placeholder}
      name={name}
      fullWidth={fullWidth}
    />
  );
};

export default Input;
