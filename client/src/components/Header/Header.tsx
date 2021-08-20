import React, { useCallback, useState } from 'react';
import { SearchSVG } from '@/assets/svgs';
import { MenuSVG, UserSVG, CartSVG, HeartSVG } from '@/assets/svgs';
import * as S from './styles';
import { Link } from '@/lib/Router';
import Sidebar from './Sidebar';
import Search from './Search';
import { SITE_TITLE } from '@/utils/constant/common';
import { logout } from '@/lib/api/auth/logout';
import { useGetUser } from '@/hooks/queries/user';

export const Links = () => {
  const { data, remove, refetch } = useGetUser();
  const onClickLogout = async () => {
    await logout();
    remove();
    refetch();
  };

  return (
    <>
      {data?.name ? (
        <button onClick={onClickLogout}>로그아웃</button>
      ) : (
        <Link to="/login">
          <UserSVG />
        </Link>
      )}
      <Link to="/mypage">
        <HeartSVG />
      </Link>
      <Link to="/cart">
        <CartSVG className="filled" />
      </Link>
    </>
  );
};

const Header = () => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  const searchWrapToggle = useCallback(() => {
    setSearchIsOpen(!searchIsOpen);
    console.log(searchIsOpen);
  }, [searchIsOpen]);

  return (
    <>
      <S.HeaderWrapper>
        <Sidebar isOpen={sideBarIsOpen} setIsOpen={setSideBarIsOpen} />
        <S.Header>
          <S.Menu>
            <S.MenuButton onClick={() => setSideBarIsOpen(!sideBarIsOpen)}>
              <MenuSVG />
            </S.MenuButton>
            <Link to="/">
              <S.Logo>{SITE_TITLE}</S.Logo>
            </Link>
          </S.Menu>
          <S.SearchWrapper onClick={searchWrapToggle}>
            <S.SearchText> 검색어를 입력해주세요. </S.SearchText>
            <SearchSVG />
          </S.SearchWrapper>
          <S.StateUl>
            <Links />
          </S.StateUl>
        </S.Header>
      </S.HeaderWrapper>
      {searchIsOpen && <Search toggleOpen={searchWrapToggle} />}
    </>
  );
};

export default Header;
