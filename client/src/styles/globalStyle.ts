import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

const PC_RESOLUTION = 1050;
const TABLET_RESOLUTION = 768;
const PHONE_RESOLUTION = 425;

const customMediaQuert = (screen: number) => `@media (min-width: ${screen}px)`;

const mediaScreen = {
  pc: customMediaQuert(PC_RESOLUTION), // 1050px 해상도 위에서만 디스플레이
  tablet: customMediaQuert(TABLET_RESOLUTION), // 768px 해상도 위에서만 디스플레이
  phone: customMediaQuert(PHONE_RESOLUTION), // 425px 해상도 위에서만 디스플레이
};

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-size: 10px;
    font-family: 'Noto Sans KR', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .pc_resolution {
    display: none;
    ${mediaScreen.pc} {
      display: block;
    }
  }

  .tablet_resolution {
    display: none;
    ${mediaScreen.tablet} {
      display: block;
    }
  }

  .phone_resolution {
    display: none;
    ${mediaScreen.phone} {
      display: block;
    }
  }

  /* 기타 필요한 글로벌 속성 작성 
  ** ex. 해상도 관련 미디어 속성(반응형)
  ** ex. 스크롤바 관련, 박스 디자인 관련, 컨테이너 관련 등등...
  */
`;

export default GlobalStyle;
