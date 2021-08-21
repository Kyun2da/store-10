import React, { useState } from 'react';
import * as S from './styles';
import MyPageAside from '@/components/MyPage/MyPageAside';
import Address from '@/components/Address';
import OrderHistory from '@/components/MyPage/OrderHistory';
import { MY_PAGE_NAVIGATIONS } from '@/contstants';
import { Redirect } from '@/lib/Router';
import { useRecoilState } from 'recoil';
import { userState } from '@/recoil/user';

const renderBody = (contentValue: string) => {
  // TODO: router Switch 사용 고민
  if (contentValue === 'orderHistroy') return <OrderHistory />;
  if (contentValue === 'address') return <Address />;
  if (contentValue === 'coupon') return <div></div>;
  if (contentValue === 'inqurey') return <div></div>;
  if (contentValue === 'review') return <div></div>;

  return <div>404</div>;
};

const MyPage = () => {
  const [contentValue, setContentValue] = useState('orderHistroy');

  const contentName = MY_PAGE_NAVIGATIONS.find(
    (nav) => nav.value === contentValue
  )?.name;

  const [user] = useRecoilState(userState);
  if (!user) return <Redirect to="/" />;

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
            {renderBody(contentValue)}
          </S.MyPageBody>
        </S.Mypage>
      </S.MyPageContainer>
    </>
  );
};

export default MyPage;
