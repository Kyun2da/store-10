import React, { useCallback, useState } from 'react';
import * as S from './style';

interface IInput {
  type: 'number';
  name: string;
  placeholder?: string;
  min?: number;
  max?: number;
  defaultValue?: number;
}

const NumberInput = ({
  type,
  name,
  placeholder,
  min,
  max,
  defaultValue,
}: IInput) => {
  const [value, setValue] = useState<number>(defaultValue ?? 0);

  const handleClickOnPlus = useCallback(
    () => setValue((value) => value + 1),
    [value]
  );
  const handleClickOnMinus = useCallback(() => {
    if (value === 1) return;
    setValue((value) => value - 1);
  }, [value]);

  return (
    <S.NumberInputArea>
      <S.AdjustButton onClick={handleClickOnMinus}>-</S.AdjustButton>
      <S.NumberInput
        readOnly
        value={value}
        type={type}
        placeholder={placeholder}
        name={name}
        min={min}
        max={max}
      />
      <S.AdjustButton onClick={handleClickOnPlus}>+</S.AdjustButton>
    </S.NumberInputArea>
  );
};

export default NumberInput;
