import styled from 'styled-components';

export const OrderContainer = styled.section`
  max-width: ${({ theme }) => theme.media.pc}px;
  background-color: ${({ theme }) => theme.color['body']};
  display: flex;
  width: 100%;
  border-radius: 1.2rem;
  @media (max-width: ${({ theme }) => theme.media.btw_pc_tab}px) {
    flex-direction: column;
  }
  > div {
    flex: 1;
  }
`;

export const OrderAside = styled.aside`
  position: relative;
  flex: 0 1 38.5rem;
  padding-right: 2rem;
  @media (max-width: ${({ theme }) => theme.media.btw_pc_tab - 1}px) {
    display: none;
  }
`;

export const OrderFooter = styled.footer`
  @media (min-width: ${({ theme }) => theme.media.btw_pc_tab - 1}px) {
    display: none;
  }
`;

export const Order = styled.div`
  flex: 1;
  padding: 3.2rem;
  @media (max-width: ${({ theme }) => theme.media.btw_pc_tab - 1}px) {
    padding: 1.6rem;
  }
`;

export const OrderHeader = styled.header``;
