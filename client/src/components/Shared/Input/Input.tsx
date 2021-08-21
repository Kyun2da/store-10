import React, { useCallback, useRef, useState } from 'react';
import * as S from './style';

export interface IInputContainer {
  fullWidth?: boolean;
}

export interface IInputLabel {
  label: 'Standard' | 'Filled' | 'Outlined';
  error?: boolean;
}
export interface IInput {
  type: 'text' | 'password' | 'number';
  label: 'Standard' | 'Filled' | 'Outlined';
  labelName?: string;
  name: string;
  placeholder?: string;
  attributes?: Record<string, unknown>;
  value?: string | number;
  error?: boolean;
  helperText?: string;
  _ref?: React.RefObject<HTMLInputElement>;
  onFocus?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
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
  error,
  helperText,
  _ref,
  onChange,
  onBlur,
  onFocus,
  onKeyPress,
}: IInput & IInputContainer) => {
  const [isFocus, setFocus] = useState(false);
  const _inputRef = useRef<HTMLInputElement>(null);
  const onClickLabel = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const inputRef = _ref ?? _inputRef

  const onBlurInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onBlur && onBlur(e);
    if (inputRef.current?.value === '') {
      setFocus((value) => !value);
    }
  };
  return (
    <S.InputContainer fullWidth={fullWidth} className="input-container">
      {labelName ? (
        <S.Label
          className={isFocus ? 'focusing' : ''}
          onClick={onClickLabel}
          label={label}
          error={error}
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
        onKeyPress={onKeyPress}
        labelName={labelName}
        error={error}
        onFocus={() => {
          onFocus;
          setFocus(true);
        }}
        onBlur={onBlurInput}
        {...attributes}
      />
      {error ? <S.ErrorText>{helperText}</S.ErrorText> : null}
    </S.InputContainer>
  );
};

export default Input;
