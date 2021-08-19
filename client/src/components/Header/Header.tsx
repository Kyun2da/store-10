import React, { useState } from 'react';
import { MenuSVG, UserSVG, CartSVG, HeartSVG } from '@/assets/svgs';
import * as S from './styles';
import { Link } from '@/lib/Router';
import Search from './Search';
import Sidebar from './Sidebar';

interface Props {
  userName?: string | null;
}

export const Links = ({ ...props }: Props) => {
  const { userName } = props;
  return (
    <>
      <Link to={userName ? '/mypage' : '/login'}>
        <UserSVG />
      </Link>
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
  const userName = window.localStorage.getItem('userName');
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  return (
    <S.HeaderWrapper>
      <Sidebar
        isOpen={sideBarIsOpen}
        setIsOpen={setSideBarIsOpen}
        userName={userName}
      />
      <S.Header>
        <S.Menu>
          <S.MenuButton onClick={() => setSideBarIsOpen(!sideBarIsOpen)}>
            <MenuSVG />
          </S.MenuButton>
          <S.Logo>
            <Link to="/">슑과잌붸흐벤</Link>
          </S.Logo>
        </S.Menu>
        <Search />
        <S.StateUl className="tablet_resolution">
          <Links userName={userName} />
        </S.StateUl>
      </S.Header>
    </S.HeaderWrapper>
  );
};

export default Header;
