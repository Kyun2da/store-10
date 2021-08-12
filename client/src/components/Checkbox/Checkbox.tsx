import React, { FC } from 'react';
import { CheckSVG } from '@/assets/svgs';
import * as S from './styles';

interface IProps {
  label?: string;
  value?: string | number;
  onChange?: () => void;
  checked?: boolean;
  className?: string;
}
const Checkbox: FC<IProps> = ({
  label,
  onChange,
  value,
  checked,
  className,
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
