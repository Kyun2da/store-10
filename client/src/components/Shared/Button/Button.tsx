import React from 'react';
import * as S from './styles';

export interface IButtonProps {
  type: 'submit' | 'button';
  color: 'primary' | 'black' | 'white';
  size?: 'Large' | 'Default' | 'Small';
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  type = 'button',
  size = 'Default',
  color = 'white',
  fullWidth,
  children,
  onClick,
  disabled = false,
}: IButtonProps) => {
  return (
    <S.Button
      type={type}
      color={color}
      className={color}
      onClick={onClick}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      {children}
    </S.Button>
  );
};

export default Button;
