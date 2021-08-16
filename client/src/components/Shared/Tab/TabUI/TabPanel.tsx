import React, { useContext, VFC } from 'react';
import * as S from './styles';
import { Context } from './TabContext';

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
}

const TabPanel: VFC<TabPanelProps> = ({ children, index }) => {
  const { value } = useContext(Context);

  return (
    <S.TabPanel className={value === index ? 'active' : ''} data-index={index}>
      {children}
    </S.TabPanel>
  );
};

export default TabPanel;
