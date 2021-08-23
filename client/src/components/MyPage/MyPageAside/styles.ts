import styled from 'styled-components';

export const MyPageAside = styled.aside`
  flex: 0 0 24rem;
  background: ${({ theme }) => theme.color.background};
  padding: 3.2rem;
  font-family: BMDOHYEON;
`;

export const MyPageUserInfo = styled.section`
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
  color: ${({ theme }) => theme.color['text-color']};
  footer {
    display: flex;
    margin: 1rem 0;
    button {
      color: ${({ theme }) => theme.color['label']};
      border-radius: 1.2rem;
      margin: 2rem 0.2rem;
      padding: 0.2rem 0.8rem;
      &:hover {
        color: ${({ theme }) => theme.color['text-color']};
      }
    }
  }
`;

export const MyPageGreeting = styled.h1`
  ${({ theme }) => theme.fontSize.xxl};
  ${({ theme }) => theme.fontWeight.xxl};
`;

export const MyPageUserName = styled.h1`
  margin-top: 1.6rem;
  ${({ theme }) => theme.fontWeight.l};
  ${({ theme }) => theme.fontSize.l};
  text-align: left;
`;

export const MyPageNav = styled.nav`
  ul {
    width: 100%;
    li {
      &.selected {
        ${({ theme }) => theme.fontSize.l};
        ${({ theme }) => theme.fontWeight.xl};
        color: ${({ theme }) => theme.color['text-color']};
      }
      width: 100%;
      ${({ theme }) => theme.fontSize.m};
      ${({ theme }) => theme.fontWeight.m};
      color: ${({ theme }) => theme.color.label};
      margin: 2.4rem;
      height: 2.15rem;
      cursor: pointer;
      &:hover {
        ${({ theme }) => theme.fontSize.l};
        ${({ theme }) => theme.fontWeight.xl};
        color: ${({ theme }) => theme.color['text-color']};
      }
    }
  }
`;
