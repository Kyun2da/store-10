import styled from 'styled-components';

export const Tab = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabTitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TabTitle = styled.span`
  ${({ theme }) => theme.fontSize.m};
  ${({ theme }) => theme.fontWeight.m};
  width: 100%;
  padding: 1.5rem;
  border: 1px solid #ededed;
  user-select: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in;

  &.active {
    color: #fff;
    background-color: ${({ theme }) => theme.color.primary};
  }
`;

export const TabPanel = styled.div`
  display: none;
  ${({ theme }) => theme.fontSize.m}
  ${({ theme }) => theme.fontWeight.s}

  &.active {
    display: block;
  }
`;
