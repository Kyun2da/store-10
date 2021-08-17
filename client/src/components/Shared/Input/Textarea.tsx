import React from 'react';
import * as S from './style';

export interface ITextarea {
  name: string;
  placeholder?: string;
  resize: 'vertical' | 'horizontal' | 'both' | 'none';
  fullWidth?: boolean;
  attributes?: Record<string, unknown>;
  value?: string;
  onFocus?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({
  name,
  placeholder,
  resize,
  value,
  attributes,
  fullWidth,
  onChange,
  onFocus,
}: ITextarea) => {
  return (
    <S.Textarea
      placeholder={placeholder}
      resize={resize}
      name={name}
      fullWidth={fullWidth}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      {...attributes}
    />
  );
};

export default Textarea;
