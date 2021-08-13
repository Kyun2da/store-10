import React, { useState } from 'react';
import * as S from './styles';
import MyPageAside from '@/components/MyPage/MyPageAside';

const MyPage = () => {
  const [content, setContent] = useState('orderHistroy');

  const renderBody = () => {
    if (content === 'orderHistroy') {
      return <h1>주문 내역</h1>;
    } else if (content === 'addresses') {
      return <h1>배송지 관리</h1>;
    } else if (content === 'coupone') {
      return <h1>쿠폰</h1>;
    } else if (content === 'inqurey') {
      return <h1>상품 문의</h1>;
    } else if (content === 'review') {
      return <h1>상품 후기</h1>;
    } else {
      return <h1>404</h1>;
    }
  };
  return (
    <>
      <S.MyPagePointBackground />
      <S.MyPageContainer className="container">
        <S.Mypage>
          <MyPageAside content={content} setContent={setContent} />
          <S.MyPageBody>{renderBody()}</S.MyPageBody>
        </S.Mypage>
      </S.MyPageContainer>
    </>
  );
};

export default MyPage;
