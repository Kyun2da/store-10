import React from 'react';
import { TabWrapper, Tabs, TabPanel, Tab } from './TabUI';
import NotFound from '@/components/NotFound';

const TabExample2 = () => {
  return (
    <TabWrapper>
      <Tabs>
        <Tab label="이것은탭이다(1)!" index={0} />
        <Tab label="이것은탭이다(2)!" index={1} />
        <Tab label="이것은탭이다(3)!" index={2} />
      </Tabs>
      <TabPanel index={0}>This is Tab1</TabPanel>
      <TabPanel index={1}>This is Tab2</TabPanel>
      <TabPanel index={2}>
        <NotFound />
      </TabPanel>
    </TabWrapper>
  );
};

export default TabExample2;
