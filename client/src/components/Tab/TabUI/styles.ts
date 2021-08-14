import styled from 'styled-components';

interface TabTitleAreaProps {
  sticky?: boolean;
}

export const Tab = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabTitleArea = styled.div<TabTitleAreaProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  position: ${({ sticky }) => (sticky ? 'sticky' : 'relative')};
  top: 5rem; // 헤더 높이만큼 되어야 합니다 (추후 헤더 디자인 수정시 반영되어야 함)
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
