import React from 'react';
import * as S from './styles';

export interface IButtonProps {
  type: 'submit' | 'button';
  color: 'primary' | 'black' | 'white' | 'red';
  size?: 'Large' | 'Default' | 'Small';
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button = ({
  type = 'button',
  size = 'Default',
  color = 'white',
  fullWidth,
  children,
  onClick,
  disabled = false,
  className,
}: IButtonProps) => {
  return (
    <S.Button
      type={type}
      color={color}
      className={color + ' ' + className}
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
