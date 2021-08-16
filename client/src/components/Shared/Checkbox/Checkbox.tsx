import React, { FC } from 'react';
import { CheckSVG } from '@/assets/svgs';
import * as S from './styles';

interface IProps {
  label?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  checked?: boolean;
}
const Checkbox: FC<IProps> = ({
  label,
  onChange,
  value,
  className,
  checked,
}) => {
  return (
    <S.Checkbox className={className}>
      <input
        type="checkbox"
        onChange={onChange}
        value={value}
        checked={checked}
      />
      <span>
        <CheckSVG width={16} height={16} />
      </span>
      {label}
    </S.Checkbox>
  );
};

export default Checkbox;
