import React from 'react';
import * as S from './styles';

const Page404 = () => {
  const handlePushBack = () => window.history.back();
  const handleRedirect = () => (window.location.href = '/main');
  return (
    <S.Page404>
      <S.AlertArea>
        <S.AlertTag>OOPS!</S.AlertTag>
        <img
          src="https://store-10.s3.ap-northeast-2.amazonaws.com/test/404/baemin.gif"
          alt="놀라는 이미지"
        />
        <S.AlertContent>
          <p className="title">여긴 어디? 나는 누구?</p>
          <p className="sub-title">혹시 길을 잃으셨나요?</p>

          <S.ButtonArea>
            <S.RedirectBtn onClick={handlePushBack}>뒤로가기</S.RedirectBtn>
            <S.RedirectBtn onClick={handleRedirect}>메인으로</S.RedirectBtn>
          </S.ButtonArea>
        </S.AlertContent>
      </S.AlertArea>
    </S.Page404>
  );
};

export default Page404;
