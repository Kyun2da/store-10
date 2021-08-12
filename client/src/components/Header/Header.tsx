import React, { useState } from 'react';
import { MenuSVG, UserSVG, CartSVG, HeartSVG } from '@/assets/svgs';
import * as S from './styles';
import { Link } from '@/core/Router';
import Search from './Search';
import Sidebar from './Sidebar';

export const Links = () => {
  return (
    <>
      <Link to="login">
        <UserSVG />
      </Link>
      <Link to="login">
        <HeartSVG />
      </Link>
      <Link to="login">
        <CartSVG />
      </Link>
    </>
  );
};

const Header = () => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  return (
    <S.HeaderWrapper>
      <Sidebar isOpen={sideBarIsOpen} setIsOpen={setSideBarIsOpen} />
      <S.Header>
        <S.Menu>
          <S.MenuButton onClick={() => setSideBarIsOpen(!sideBarIsOpen)}>
            <MenuSVG />
          </S.MenuButton>
          <S.Logo>슑과잌붸흐벤</S.Logo>
        </S.Menu>
        <Search />
        <S.StateUl className="tablet_resolution">
          <Links />
        </S.StateUl>
      </S.Header>
    </S.HeaderWrapper>
  );
};

export default Header;
