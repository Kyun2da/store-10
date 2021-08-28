import styled from 'styled-components';
import Title from '@/components/Shared/Title';

export const MyPageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 2rem;
  gap: 2rem;
  margin-top: 8.5rem;
`;

export const MyPageTitle = styled(Title)`
  font-family: BMDOHYEON;
  background: ${({ theme }) => theme.color.body};
  padding: 1rem 0;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 1.5rem;

  ${({ theme }) => theme.mediaScreen.phone`
    font-size: 3.2rem;
  `}
`;

export const MyPagePointBackground = styled.div`
  position: absolute;
  height: 20rem;
  width: 100%;
  background: ${({ theme }) => theme.color.primary};
`;

export const MyPageBody = styled.div`
  flex: 1;
`;

export const MyPage = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  gap: 2rem;

  ${({ theme }) => theme.mediaScreen.btw_pc_tab`
    flex-direction: column;  
  `}
`;
