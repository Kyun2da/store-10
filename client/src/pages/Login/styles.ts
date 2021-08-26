import styled from 'styled-components';
import Title from '@/components/Shared/Title';
import { GitHubSVG } from '@/assets/svgs';

export const LoginTitle = styled(Title)`
  margin-bottom: 4rem;
`;

export const LoginForm = styled.form`
  max-width: ${({ theme }) => theme.media.pc}px;
  display: flex;
  flex-direction: column;
  width: 420px;
  text-align: center;
  margin: auto;

  button,
  .input-container {
    margin-bottom: 2rem;
  }

  button {
    height: 5rem;
  }
`;

export const GithubIcon = styled(GitHubSVG)`
  margin-right: 1rem;
`;

export const LinkContainer = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;

  a {
    padding: 0 2rem;
    margin-left: 2rem;
    border-left: 1px solid gray;
    color: ${({ theme }) => theme.color.primary};
  }
`;
