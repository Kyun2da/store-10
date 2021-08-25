import styled from 'styled-components';

export const Main = styled.div`
  h1.product-title {
    font-family: 'BMDOHYEON';
    color: ${({ theme }) => theme.color['text-color']};
    ${({ theme }) => theme.fontSize.l};
    margin: 3rem 0 1rem;
  }
`;
