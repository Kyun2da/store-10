import React from 'react';
import { TabContextProps } from './TabContext';
import * as S from './styles';

const Tabs = ({ children, sticky }: TabContextProps) => {
  return <S.TabTitleArea sticky={sticky}>{children}</S.TabTitleArea>;
};

export default Tabs;
