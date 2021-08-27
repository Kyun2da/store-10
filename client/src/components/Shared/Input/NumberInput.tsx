import React from 'react';
import * as S from './style';

interface IInput {
  type: 'number';
  name: string;
  placeholder?: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  value: number;
  handleOnChnage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickOnMinus: () => void;
  handleClickOnPlus: () => void;
  className?: string;
}

const NumberInput = ({
  type,
  name,
  placeholder,
  min,
  max,
  value,
  handleOnChnage,
  handleClickOnMinus,
  handleClickOnPlus,
  className,
}: IInput) => {
  return (
    <S.NumberInputArea className={className}>
      <S.AdjustButton onClick={handleClickOnMinus}>-</S.AdjustButton>
      <S.NumberInput
        // TODO: 지금은 콘솔에러 땜에 readOnly 먹여놨는데 이러면 타이핑으로 직접 수량 입력이 불가합니다
        // 키보드 입력으로도 수량 입력을 가능하게 해줄지 (대량구매 고려 등..) 논의가 필요할듯??
        onChange={(e) => handleOnChnage(e)}
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
