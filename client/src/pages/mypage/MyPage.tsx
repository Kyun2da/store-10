import React, { useState } from 'react';
import * as S from './styles';
import MyPageAside from '@/components/MyPage/MyPageAside';
import Addresses from '@/components/Addresses';
import { MY_PAGE_NAVIGATIONS } from '@/contstants';

const MyPage = () => {
  const [contentValue, setContentValue] = useState('addresses');

  const contentName = MY_PAGE_NAVIGATIONS.find(
    (nav) => nav.value === contentValue
  )?.name;

  const renderBody = () => {
    if (contentValue === 'orderHistroy') {
      return <div></div>;
    } else if (contentValue === 'addresses') {
      return <Addresses />;
    } else if (contentValue === 'coupone') {
      return <div></div>;
    } else if (contentValue === 'inqurey') {
      return <div></div>;
    } else if (contentValue === 'review') {
      return <div></div>;
    } else {
      return <div>404</div>;
    }
  };
  return (
    <>
      <S.MyPagePointBackground />
      <S.MyPageContainer className="container">
        <S.Mypage>
          <MyPageAside
            contentValue={contentValue}
            setContentValue={setContentValue}
          />
          <S.MyPageBody>
            <S.MyPageTitle level={1}>{contentName}</S.MyPageTitle>
            {renderBody()}
          </S.MyPageBody>
        </S.Mypage>
      </S.MyPageContainer>
    </>
  );
};

export default MyPage;
