import React, { useCallback } from 'react';
import { CheckSVG } from '@/assets/svgs';
import * as S from './styles';

interface IProps {
  label?: string;
  value?: string | number;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  checked?: boolean;
}
const Checkbox = ({
  label,
  onChange,
  value,
  className,
  checked,
  name,
}: IProps) => {
  const checkBoxOnClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <S.Checkbox className={className} onClick={checkBoxOnClick}>
      <input
        name={name}
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
