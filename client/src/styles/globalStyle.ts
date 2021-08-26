import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const HEADER_HEIGHT = 6;
const PC_RESOLUTION = 1050;
const TABLET_RESOLUTION = 768;
const PHONE_RESOLUTION = 425;

const customMediaQuery = (screen: number) => `@media (min-width: ${screen}px)`;

const mediaScreen = {
  pc: customMediaQuery(PC_RESOLUTION), // 1050px 해상도 위에서만 디스플레이
  tablet: customMediaQuery(TABLET_RESOLUTION), // 768px 해상도 위에서만 디스플레이
  phone: customMediaQuery(PHONE_RESOLUTION), // 425px 해상도 위에서만 디스플레이
};

export const media = {
  pc: PC_RESOLUTION,
  tablet: TABLET_RESOLUTION,
  phone: PHONE_RESOLUTION,
};

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'BMDOHYEON';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMDOHYEON.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html, body {
    font-size: 10px;
    font-family: 'Noto Sans KR', sans-serif;
  }

  button {
    cursor: pointer;
    outline: none;
    background: none;
    border: none;
  }

  * {
    box-sizing: border-box;
  }

  input:focus {
    outline : none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .container {
    max-width: ${PC_RESOLUTION}px;
    margin: 5rem auto;
    flex: 1;
  }

  .pagination-scroll-top {
    padding-top: ${HEADER_HEIGHT}rem;
    margin-top: ${-HEADER_HEIGHT}rem;
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
