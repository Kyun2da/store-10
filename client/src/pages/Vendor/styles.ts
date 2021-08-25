import styled from 'styled-components';

export const Vendor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .main-title {
    margin-bottom: 3rem;
  }
`;

export const VendorList = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;

  & + & {
    border-top: 1px solid ${({ theme }) => theme.color.line};
  }
`;

export const VendorListItem = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.fontSize.m};
  ${({ theme }) => theme.fontWeight.s};
`;

export const OuterLink = styled.a`
  color: ${({ theme }) => theme.color.primary3};
  ${({ theme }) => theme.fontSize.m};
  ${({ theme }) => theme.fontWeight.l};
`;
