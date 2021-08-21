import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductThumbnails from './ProductThumbnails';
import { useGetProductById } from '@/hooks/queries/product';
import thumbnailsParser from '@/utils/thumbnailsParser';

export default {
  title: '컴포넌트/상품상세-섬네일',
  component: ProductThumbnails,
} as ComponentMeta<typeof ProductThumbnails>;

// react-query 어케 쓰나염

const Template: ComponentStory<typeof ProductThumbnails> = (args) => {
  const { data } = useGetProductById('70000');

  if (data) {
    const { thumbnails } = data;
    const [thumbDetails, thumbOrigins, thumbThumbnails] =
      thumbnailsParser(thumbnails);

    return (
      <ProductThumbnails
        thumbDetails={thumbDetails}
        thumbOrigins={thumbOrigins}
        thumbThumbnails={thumbThumbnails}
      />
    );
  }

  return <ProductThumbnails {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  thumbDetails: undefined,
  thumbOrigins: undefined,
  thumbThumbnails: undefined,
};
