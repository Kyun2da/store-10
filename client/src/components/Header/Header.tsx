import { Link, NavLink } from '@/core/Router';
import React from 'react';
import * as S from './styles';

const Header = () => {
  return (
    <S.Header>
      이것은 헤더헤더
      <S.FlexBox>
        <Link to="/main">메인</Link>
        <Link to="/detail/3">디테일</Link>
        <NavLink to="/navlink" activeClassName="on">
          NavLink 테스트
        </NavLink>
      </S.FlexBox>
    </S.Header>
  );
};

export default Header;
