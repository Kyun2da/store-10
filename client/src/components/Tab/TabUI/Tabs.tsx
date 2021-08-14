import React, { useContext, VFC } from 'react';
import TabContext, { Context, TabContextProps } from './TabContext';
import * as S from './styles';

const Tabs: VFC<TabContextProps> = ({ children }) => {
  return <S.TabTitleArea>{children}</S.TabTitleArea>;
};

export default Tabs;
