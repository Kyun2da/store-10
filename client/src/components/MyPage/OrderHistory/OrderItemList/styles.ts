import styled from 'styled-components';

export const OrderItemList = styled.ul``;

export const OrderItemListHeader = styled.header`
  display: flex;
  padding-bottom: 2rem;
  ${({ theme }) => theme.fontWeight.l};
  ${({ theme }) => theme.fontSize.m};
`;

export const OrderItem = styled.div`
  border: 1px solid ${({ theme }) => theme.color['border-gray']};
  display: flex;
`;

export const OrderItemInfo = styled.div`
  flex: 3;
  padding: 2rem;
  border-right: 1px solid ${({ theme }) => theme.color['border-gray']};
`;

export const OrderItemInfoHeader = styled.header``;

export const OrderItemInfoStatus = styled.span`
  ${({ theme }) => theme.fontWeight.xl};
  ${({ theme }) => theme.fontSize.l};
`;

export const OrderItemInfoSubStatus = styled.span`
  margin-left: 1rem;
  ${({ theme }) => theme.fontWeight.l};
  ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.label};
`;

export const OrderItemInfoBody = styled.div`
  margin-top: 2.4rem;
  display: flex;
`;

export const OrderItemInfoDescription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 1.2rem;
`;

export const OrderItemName = styled.span`
  ${({ theme }) => theme.fontWeight.xl};
  ${({ theme }) => theme.fontSize.l};
`;

export const OrderItemPrice = styled.span`
  ${({ theme }) => theme.fontWeight.m};
  ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.label};
`;

export const OrderItemActions = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0.8rem;
  gap: 0.8rem;
  button {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.color['border-gray']};
    ${({ theme }) => theme.fontWeight.l};
    ${({ theme }) => theme.fontSize.m};
    width: 100%;
  }
`;
