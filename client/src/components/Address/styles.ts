import styled from 'styled-components';

export const AddressList = styled.ul``;

export const AddressItem = styled.li`
  margin-top: 1.2rem;
  background: ${({ theme }) => theme.color['off-white']};
  padding: 1.2rem;
  border-radius: 1.2rem;
  border: 0.1rem solid ${({ theme }) => theme.color['border-gray']};
  &.default-address {
    border: 0.1rem solid ${({ theme }) => theme.color.primary};
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
  ${({ theme }) => theme.fontSize.s};
`;

export const AddressInfoText = styled.span`
  padding: 0.4rem 0;
  ${({ theme }) => theme.fontWeight.l};
  ${({ theme }) => theme.fontSize.m};
  display: block;
`;

export const AddressInfoPhone = styled(AddressInfoText)`
  color: ${({ theme }) => theme.color.label};
`;

export const AddressInfo = styled.section`
  margin-top: 1.2rem;
`;

export const AddressItemFooter = styled.footer`
  margin-top: 1.2rem;
  display: flex;
  button {
    ${({ theme }) => theme.fontSize.m};
    ${({ theme }) => theme.fontWeight.m};
    border: 1px solid ${({ theme }) => theme.color['border-gray']};

    &:first-child {
      margin-right: 0.8rem;
    }

    &:last-child {
      ${({ theme }) => theme.fontWeight.l};
      margin-left: auto;
    }
  }
`;

export const AddressListFooter = styled.footer`
  margin-top: 1.2rem;
  button {
    width: 100%;
  }
`;
