import styled from 'styled-components';
import Title from '@/components/Shared/Title';

export const MyPageContainer = styled.div`
  max-width: ${({ theme }) => theme.media.pc}px;
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 90vh;
  padding-bottom: 2rem;
  &.container {
    @media (max-width: ${({ theme }) => theme.media.tablet - 1}px) {
      padding: 0;
    }
  }
`;

export const Mypage = styled.div`
  display: flex;
  width: 100%;
  margin-top: 6rem;
  border-radius: 0.8rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  overflow: hidden;
`;

export const MyPageTitle = styled(Title)`
  font-family: BMDOHYEON;
  padding-bottom: 2rem;
  @media (max-width: ${({ theme }) => theme.media.btw_tab_mob - 1}px) {
    padding-left: 2rem;
  }
`;

export const MyPagePointBackground = styled.div`
  position: absolute;
  height: 20rem;
  width: 100%;
  background: ${({ theme }) => theme.color.primary};
`;

export const MyPageBody = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.color.background};
  padding: 3.2rem;
  h1 {
    ${({ theme }) => theme.fontSize.xxl};
  }
  @media (max-width: ${({ theme }) => theme.media.btw_tab_mob - 1}px) {
    padding: 3.2rem 0;
  }
`;
