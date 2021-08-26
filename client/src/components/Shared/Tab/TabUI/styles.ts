import styled from 'styled-components';

interface TabTitleAreaProps {
  sticky?: boolean;
}

export const Tab = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavWrapper = styled.nav<TabTitleAreaProps>`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.background};
  position: ${({ sticky }) => (sticky ? 'sticky' : 'relative')};
  z-index: 50;
  top: 6rem; // 헤더 높이만큼 되어야 합니다 (추후 헤더 디자인 수정시 반영되어야 함)
`;

export const TabTitleArea = styled.div`
  padding: auto;
  width: 100%;
  max-width: 1050px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color['text-color']};
`;

export const TabTitle = styled.span`
  ${({ theme }) => theme.fontSize.m};
  ${({ theme }) => theme.fontWeight.m};
  width: 100%;
  padding: 1.5rem;
  user-select: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in;
  text-align: center;

  &.active {
    border-top: 0.3rem solid ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.primary};
    ${({ theme }) => theme.fontWeight.l};
    background-color: ${({ theme }) => theme.color.body};
  }
`;

export const TabPanel = styled.div`
  margin: auto;
  margin-bottom: 5rem;
  width: 100%;
  max-width: ${({ theme }) => theme.media.pc}px;
  ${({ theme }) => theme.fontSize.m}
  ${({ theme }) => theme.fontWeight.s}

  &.pagination-scroll-top {
    margin-top: -13rem;
    padding-top: 13rem;
  }
`;
