import styled from 'styled-components';

export const AddressList = styled.ul`
  border-collapse: collapse;
  li + li {
    border-top: none;
  }
`;

export const AddressItem = styled.li`
  background: ${({ theme }) => theme.color['off-white']};
  padding: 1.2rem;
  border: 0.1rem solid ${({ theme }) => theme.color.line};
  &.default-address {
    border: 0.3rem solid ${({ theme }) => theme.color.primary};
  }

  &:first-child {
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
  }
  &:last-child {
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
  }
`;

export const AddressItemHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddressName = styled.span`
  ${({ theme }) => theme.fontWeight.xl};
  ${({ theme }) => theme.fontSize.m};
`;

export const DefaultAddress = styled.span`
  border-radius: 1.2rem;
  border: 0.1rem solid ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.primary};
  padding: 0.4rem 0.6rem;
`;

export const AddressInfoText = styled.span`
  padding: 0.4rem 0;
  ${({ theme }) => theme.fontWeight.m};
  ${({ theme }) => theme.fontSize.m};
  display: block;
`;

export const AddressInfo = styled.section`
  margin-top: 1.2rem;
`;

export const DeliveryMessage = styled(AddressInfoText)`
  margin-top: 1.2rem;
`;

export const AddressItemFooter = styled.footer`
  margin-top: 1.2rem;
  display: flex;
  button {
    ${({ theme }) => theme.fontSize.m};
    ${({ theme }) => theme.fontWeight.m};
    border: 1px solid ${({ theme }) => theme.color.line};

    &:first-child {
      margin-right: 0.8rem;
    }
  }
`;

export const AddressListFooter = styled.footer`
  margin-top: 1.2rem;
  button {
    width: 100%;
  }
`;
