import React from 'react';
import * as S from './styles';

export interface IButtonProps {
  type: 'submit' | 'button';
  color: 'primary' | 'black' | 'white';
  size?: 'Large' | 'Default' | 'Small';
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button = ({
  type = 'button',
  size = 'Default',
  color = 'white',
  children,
  onClick,
}: IButtonProps) => {
  return (
    <S.Button
      type={type}
      color={color}
      className={color}
      onClick={onClick}
      size={size}
    >
      {children}
    </S.Button>
  );
};

export default Button;
