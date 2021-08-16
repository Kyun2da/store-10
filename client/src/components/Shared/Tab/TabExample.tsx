import React from 'react';
import { TabWrapper, Tabs, TabPanel, Tab } from './TabUI';
import Banner from '@/components/Banner/';

const TabExample = () => {
  return (
    <TabWrapper>
      <Tabs>
        <Tab label="탭1" index={0} />
        <Tab label="탭2" index={1} />
        <Tab label="탭3" index={2} />
      </Tabs>
      <TabPanel index={0}>탭탭탭1</TabPanel>
      <TabPanel index={1}>
        <Banner />
      </TabPanel>
      <TabPanel index={2}>탭탭탭3</TabPanel>
    </TabWrapper>
  );
};

export default TabExample;
