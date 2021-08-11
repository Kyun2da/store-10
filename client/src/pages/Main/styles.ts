import styled from 'styled-components';

export const Main = styled.div`
  margin-top: 3rem;

  h1.product-title {
    color: ${({ theme }) => theme.color['text-color']};
    ${({ theme }) => theme.fontSize.m};
    margin: 2rem 0;
  }
`;
