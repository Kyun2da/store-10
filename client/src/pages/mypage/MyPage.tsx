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
    // TODO: router Switch 사용 고민
    if (contentValue === 'orderHistroy') return <div></div>;
    if (contentValue === 'addresses') return <Addresses />;
    if (contentValue === 'coupone') return <div></div>;
    if (contentValue === 'inqurey') return <div></div>;
    if (contentValue === 'review') return <div></div>;

    return <div>404</div>;
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
