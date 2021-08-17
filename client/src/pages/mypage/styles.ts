import styled from 'styled-components';
import Title from '@/components/Shared/Title';

export const MyPageContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 90vh;
  padding-bottom: 2rem;
`;

export const Mypage = styled.div`
  display: flex;
  width: 100%;
  margin-top: 6rem;
  border-radius: 0.8rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;

export const MyPageTitle = styled(Title)`
  font-family: BMDOHYEON;
  padding-bottom: 2rem;
`;

export const MyPagePointBackground = styled.div`
  position: absolute;
  height: 20rem;
  width: 100%;
  background: ${({ theme }) => theme.color.primary};
`;

export const MyPageBody = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.color.body};
  padding: 3.2rem;
  h1 {
    ${({ theme }) => theme.fontSize.xxl};
  }
`;
