import styled from 'styled-components';

export const ShoppingCart = styled.div`
  display: flex;
  width: 100%;
  padding-top: 60px;
  @media (max-width: ${({ theme }) => theme.media.tablet}px) {
    flex-direction: column;
  }
  > div {
    flex: 1;
  }
`;

export const ShoppingCartAside = styled.aside`
  position: relative;
  flex: 0 1 385px;
  padding-right: 2rem;
  @media (max-width: ${({ theme }) => theme.media.tablet}px) {
    display: none;
  }
`;

export const ShoppingCartFooter = styled.footer`
  padding: 0 2rem 2rem 2rem;
  div {
    margin-top: 0;
  }
  @media (min-width: ${({ theme }) => theme.media.tablet}px) {
    display: none;
  }
`;
