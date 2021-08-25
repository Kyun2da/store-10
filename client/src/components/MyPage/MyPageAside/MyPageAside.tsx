import React, { Dispatch } from 'react';
import * as S from './styles';
import { MY_PAGE_NAVIGATIONS } from '@/contstants';
import { useHistory } from '@/lib/Router';
import { logout } from '@/lib/api/auth/logout';
import { useRecoilState } from 'recoil';
import { userState } from '@/recoil/user';

interface IMypageAsideProps {
  setContentValue: Dispatch<string>;
  contentValue: string;
}

interface IMyPageNavigation {
  value: string;
  name: string;
}

const MyPageAside = ({ setContentValue, contentValue }: IMypageAsideProps) => {
  const [user, setUser] = useRecoilState(userState);
  const renderNavigations = () => {
    return MY_PAGE_NAVIGATIONS.filter(
      (item) => item.value !== 'changeUserInfo'
    ).map((nav: IMyPageNavigation) => (
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

  const onClickChangeUserInfo = () => {
    setContentValue('changeUserInfo');
  };

  const onClickLogout = async () => {
    await logout();
    setUser(null);
    historyPush('/');
  };

  return (
    <S.MyPageAside>
      <S.MyPageUserInfo>
        <S.MyPageGreeting>안녕하세요,</S.MyPageGreeting>
        <S.MyPageUserName>{user?.name}님!</S.MyPageUserName>
        <footer>
          <button onClick={onClickChangeUserInfo}>회원 정보 변경</button>
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
