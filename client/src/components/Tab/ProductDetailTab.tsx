import React from 'react';
import ProductDelivery from '@/components/ProductDetails/ProductDelivery';
import ProductDescription from '@/components/ProductDetails/ProductDescription';
import { TabWrapper, Tabs, TabPanel, Tab } from './TabUI';
import ProductExchange from '@/components/ProductDetails/ProductExchange.tsx/ProductExchange';
import ProductReview from '@/components/ProductDetails/ProductReview';
import ProductRequest from '../ProductDetails/ProductRequest';

const ProductDetailTab = () => {
  return (
    <TabWrapper>
      <Tabs sticky>
        <Tab label="상세정보" index={0} />
        <Tab label="배송안내" index={1} />
        <Tab label="교환 및 반품안내" index={2} />
        <Tab label="상품후기" index={3} />
        <Tab label="상품문의" index={4} />
      </Tabs>
      <TabPanel index={0}>
        <ProductDescription />
      </TabPanel>
      <TabPanel index={1}>
        <ProductDelivery />
      </TabPanel>
      <TabPanel index={2}>
        <ProductExchange />
      </TabPanel>
      <TabPanel index={3}>
        <ProductReview totalRating={4.3} />
      </TabPanel>
      <TabPanel index={4}>
        <ProductRequest />
      </TabPanel>
    </TabWrapper>
  );
};

export default ProductDetailTab;
