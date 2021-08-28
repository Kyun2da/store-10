import styled from 'styled-components';
import Button from '@/components/Shared/Button';

export const OrderItemList = styled.ul``;

export const OrderItemListHeader = styled.header`
  display: flex;
  padding-bottom: 2rem;
  ${({ theme }) => theme.fontWeight.l};
  ${({ theme }) => theme.fontSize.m};
`;

export const OrderItem = styled.li`
  margin-top: 1.2rem;
  border: 1px solid ${({ theme }) => theme.color['border-gray']};
  display: flex;
`;

export const OrderItemInfo = styled.div`
  flex: 3;
  padding: 2rem;
  border-right: 1px solid ${({ theme }) => theme.color['border-gray']};
  display: flex;
  align-items: center;
`;

export const OrderItemInfoHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const OrderItemInfoStatusWrapper = styled.div`
  flex: 3;
  padding-right: 2rem;
  display: flex;
  align-items: center;
`;

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
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const OrderItemPrice = styled.span`
  ${({ theme }) => theme.fontWeight.m};
  ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.label};
  padding-top: 0.8rem;
`;

export const OrderItemActions = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0.8rem;
  gap: 0.8rem;
`;

export const OrderActionsButton = styled(Button)`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color['border-gray']};
  ${({ theme }) => theme.fontWeight.l};
  ${({ theme }) => theme.fontSize.m};
  width: 100%;
`;

export const OrderDeliveryButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.primary};
  ${({ theme }) => theme.fontWeight.l};
  ${({ theme }) => theme.fontSize.m};
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color['off-white']};
  }
`;
