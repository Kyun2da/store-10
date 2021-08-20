import React, { Dispatch } from 'react';
import * as S from './styles';
import { MY_PAGE_NAVIGATIONS } from '@/contstants';
import { useGetUser } from '@/hooks/queries/user';
import { Redirect, useHistory } from '@/lib/Router';
import { logout } from '@/lib/api/auth/logout';

interface IMypageAsideProps {
  setContentValue: Dispatch<string>;
  contentValue: string;
}

interface IMyPageNavigation {
  value: string;
  name: string;
}

const MyPageAside = ({ setContentValue, contentValue }: IMypageAsideProps) => {
  const { data, remove, refetch } = useGetUser();
  const renderNavigations = () => {
    return MY_PAGE_NAVIGATIONS.map((nav: IMyPageNavigation) => (
      <li
        key={nav.value}
        onClick={() => setContentValue(nav.value)}
        className={nav.value === contentValue ? 'selected' : undefined}
      >
        {nav.name}
      </li>
    ));
  };
  const { historyPush } = useHistory();
  const onClickLogout = async () => {
    await logout();
    remove();
    refetch();
    historyPush('/');
  };

  if (!data) <Redirect to="/" />;

  return (
    <S.MyPageAside>
      <S.MyPageUserInfo>
        <S.MyPageGreeting>안녕하세요,</S.MyPageGreeting>
        <S.MyPageUserName>{data?.name}님!</S.MyPageUserName>
        <footer>
          <button>회원 정보 변경</button>
          <button onClick={onClickLogout}>로그아웃</button>
        </footer>
      </S.MyPageUserInfo>
      <S.MyPageNav>
        <ul>{renderNavigations()}</ul>
      </S.MyPageNav>
    </S.MyPageAside>
  );
};

export default MyPageAside;
