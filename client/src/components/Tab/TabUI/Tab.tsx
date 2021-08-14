import React, { useContext } from 'react';
import * as S from './styles';
import { Context } from './TabContext';

interface TabProps {
  label: string;
  index: number;
}

const Tab = ({ label, index }: TabProps) => {
  const { value, setValue } = useContext(Context);

  const handleClick = () => {
    setValue(index);
  };

  return (
    <S.TabTitle
      className={value === index ? 'active' : ''}
      onClick={handleClick}
      data-index={index}
    >
      {label}
    </S.TabTitle>
  );
};

export default Tab;
