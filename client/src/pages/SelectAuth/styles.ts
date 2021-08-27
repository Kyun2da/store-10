import { GitHubSVG } from '@/assets/svgs';
import styled from 'styled-components';

export const SelectAuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  text-align: center;
  margin: auto;

  h3,
  p,
  button {
    margin-bottom: 2rem;
  }

  button {
    height: 6rem;
  }

  @media (max-width: ${({ theme }) => theme.media.btw_tab_mob - 1}px) {
    width: 260px;

    h3 {
      ${({ theme }) => theme.fontSize.l}
    }

    button {
      height: 3rem;
      ${({ theme }) => theme.fontSize.s}
      margin-bottom: 1rem;
    }

    input {
      ${({ theme }) => theme.fontSize.s}
      height: 3rem;
    }
  }
`;

export const Welcome = styled.p`
  font-size: 3rem;
  color: ${({ theme }) => theme.color['text-color']};
  @media (max-width: ${({ theme }) => theme.media.btw_tab_mob - 1}px) {
    ${({ theme }) => theme.fontSize.m}
  }
`;

export const Info = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.color['text-color']};

  @media (max-width: ${({ theme }) => theme.media.btw_tab_mob - 1}px) {
    ${({ theme }) => theme.fontSize.xs}
  }
`;

export const BackLoginContainer = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.line};

  a {
    margin-left: 1rem;
    color: ${({ theme }) => theme.color['text-color']};
  }

  @media (max-width: ${({ theme }) => theme.media.btw_tab_mob - 1}px) {
    ${({ theme }) => theme.fontSize.xs}
  }
`;

export const GithubIcon = styled(GitHubSVG)`
  margin-right: 1rem;

  @media (max-width: ${({ theme }) => theme.media.btw_tab_mob - 1}px) {
    width: 2rem;
  }
`;
