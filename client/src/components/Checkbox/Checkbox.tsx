import React, { FC } from 'react';
import Check from '@/assets/check.svg';
import * as S from './styles';

interface IProps {
  label?: string;
  value?: string | number;
  onChange?: () => void;
  checked?: boolean;
}
const Checkbox: FC<IProps> = ({ label, onChange, value, checked }) => {
  return (
    <S.Checkbox>
      <input
        type="checkbox"
        onChange={onChange}
        value={value}
        checked={checked}
      />
      <span>
        <Check width={11} height={11} />
      </span>
      {label}
    </S.Checkbox>
  );
};

export default Checkbox;
