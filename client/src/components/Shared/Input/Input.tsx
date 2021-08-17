import React, { useCallback, useRef, useState } from 'react';
import * as S from './style';

export interface IInputContainer {
  fullWidth?: boolean;
}

export interface IInputLabel {
  label: 'Standard' | 'Filled' | 'Outlined';
}
export interface IInput {
  type: 'text' | 'password' | 'number';
  label: 'Standard' | 'Filled' | 'Outlined';
  labelName?: string;
  name: string;
  placeholder?: string;
  attributes?: Record<string, unknown>;
  value?: string | number;
  onFocus?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type,
  label,
  labelName,
  name,
  placeholder,
  value,
  attributes,
  fullWidth,
  onChange,
  onFocus,
}: IInput & IInputContainer) => {
  const [isFocus, setFocus] = useState(false);
  const onClickLabel = useCallback(() => {
    inputRef.current?.focus();
  }, []);
  const inputRef = useRef<HTMLInputElement>(null);

  const onBlurInput = () => {
    console.log(inputRef.current?.value);
    if (inputRef.current?.value === '') {
      setFocus((value) => !value);
    }
  };
  return (
    <S.InputContainer fullWidth={fullWidth}>
      {labelName ? (
        <S.Label
          className={isFocus ? 'focusing' : ''}
          onClick={onClickLabel}
          label={label}
        >
          {labelName}
        </S.Label>
      ) : null}
      <S.Input
        type={type}
        label={label}
        className={isFocus ? 'focusing' : ''}
        placeholder={placeholder}
        name={name}
        ref={inputRef}
        value={value}
        onChange={onChange}
        labelName={labelName}
        onFocus={() => {
          onFocus;
          setFocus(true);
        }}
        onBlur={onBlurInput}
        {...attributes}
      />
    </S.InputContainer>
  );
};

export default Input;
