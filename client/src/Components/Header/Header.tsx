import { Link } from '@/core/Router';
import React from 'react';
import { StyledHeader } from './styles';

const Header = () => {
  return (
    <StyledHeader>
      이것은 헤더헤더
      <div>
        <Link to="/main">메인</Link>
        <Link to="/detail">디테일</Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
