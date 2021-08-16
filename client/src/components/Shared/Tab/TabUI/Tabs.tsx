import React, { VFC } from 'react';
import { TabContextProps } from './TabContext';
import * as S from './styles';

const Tabs: VFC<TabContextProps> = ({ children, sticky }) => {
  return <S.TabTitleArea sticky={sticky}>{children}</S.TabTitleArea>;
};

export default Tabs;
