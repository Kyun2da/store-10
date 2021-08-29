import styled from 'styled-components';
import Title from '@/components/Shared/Title';
import { GitHubSVG } from '@/assets/svgs';

export const LoginTitle = styled(Title)`
  margin-bottom: 4rem;

  @media (max-width: ${({ theme }) => theme.media.phone - 1}px) {
    ${({ theme }) => theme.fontSize.l}
  }
`;

export const LoginForm = styled.form`
  max-width: ${({ theme }) => theme.media.pc}px;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  width: 420px;
  text-align: center;
  margin: auto;

  button,
  .input-container {
    margin-top: 2rem;
  }

  .validate-input {
    margin-bottom: 2rem;
  }

  button {
    height: 5rem;
  }

  button.white {
    color: ${({ theme }) => theme.color['text-color']};
    background-color: ${({ theme }) => theme.color['reverse-text-color']};
  }

  @media (max-width: ${({ theme }) => theme.media.phone - 1}px) {
    width: 260px;
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

export const GithubIcon = styled(GitHubSVG)`
  margin-right: 1rem;

  @media (max-width: ${({ theme }) => theme.media.phone - 1}px) {
    width: 2rem;
  }
`;

export const LinkContainer = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.color['text-color']};

  a {
    padding: 0 2rem;
    margin-left: 2rem;
    border-left: 1px solid gray;
    color: ${({ theme }) => theme.color.primary};
  }

  @media (max-width: ${({ theme }) => theme.media.phone - 1}px) {
    ${({ theme }) => theme.fontSize.xs}
  }
`;

export const LogoImg = styled.img`
  height: 3rem;
  margin-right: 1rem;

  @media (max-width: ${({ theme }) => theme.media.phone - 1}px) {
    height: 2rem;
  }
`;
