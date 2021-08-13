import React, { Dispatch, FC } from 'react';
import * as S from './styles';

interface IMypageAsideProps {
  setContent: Dispatch<string>;
  content: string;
}

const MyPageAside: FC<IMypageAsideProps> = ({ setContent, content }) => {
  const navs = [
    { value: 'orderHistroy', name: '주문 내역' },
    { value: 'addresses', name: '배송지 관리' },
    { value: 'coupone', name: '쿠폰' },
    { value: 'inqurey', name: '상품 문의' },
    { value: 'review', name: '상품 후기' },
  ];

  console.log(content);

  const renderNavigations = () => {
    return navs.map((nav) => (
      <li
        key={nav.value}
        onClick={() => setContent(nav.value)}
        className={nav.value === content ? 'selected' : undefined}
      >
        {nav.name}
      </li>
    ));
  };

  return (
    <S.MyPageAside>
      <S.MyPageUserInfo>
        <S.MyPageGreeting>안녕하세요,</S.MyPageGreeting>
        <S.MyPageUserName> 슑과잌붸흐벤님!</S.MyPageUserName>
        <footer>
          <button>회원 정보 변경</button>
          <button>로그아웃</button>
        </footer>
      </S.MyPageUserInfo>
      <S.MyPageNav>
        <ul>{renderNavigations()}</ul>
      </S.MyPageNav>
    </S.MyPageAside>
  );
};

export default MyPageAside;
