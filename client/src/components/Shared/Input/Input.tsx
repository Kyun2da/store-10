import React from 'react';
import * as S from './style';

export interface IInput {
  type: 'text' | 'password' | 'number';
  label: 'Standard' | 'Filled' | 'Outlined';
  name: string;
  placeholder?: string;
  fullWidth?: boolean;
  attributes?: Record<string, unknown>;
  value?: string | number;
  onFocus?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type,
  label,
  name,
  placeholder,
  value,
  attributes,
  fullWidth,
  onChange,
  onFocus,
}: IInput) => {
  return (
    <S.Input
      type={type}
      label={label}
      placeholder={placeholder}
      name={name}
      fullWidth={fullWidth}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      {...attributes}
    />
  );
};

export default Input;
