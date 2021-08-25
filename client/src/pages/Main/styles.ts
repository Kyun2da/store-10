import styled from 'styled-components';

export const Main = styled.div`
  h1.product-title {
    font-family: 'BMDOHYEON';
    color: ${({ theme }) => theme.color['text-color']};
    ${({ theme }) => theme.fontSize.l};
    margin: 3rem 0 1rem;
  }

  section {
    > div:first-child {
      max-width: ${({ theme }) => theme.media.pc}px;
      margin: 0 auto;
      padding: 1rem 0;
      width: 95%;
    }
    &:nth-child(2n) {
      background: ${({ theme }) => theme.color['background']};
    }
  }
`;
