import React from 'react';
import { TabContextProps } from './TabContext';
import * as S from './styles';

const Tabs = ({ children, sticky }: TabContextProps) => {
  return (
    <S.NavWrapper sticky={sticky}>
      <S.TabTitleArea>{children}</S.TabTitleArea>
    </S.NavWrapper>
  );
};

export default Tabs;
