import styled from 'styled-components';
import githubIcon from '@/assets/github.svg';
import Title from '@/components/Title';

export const LoginTitle = styled(Title)`
  margin-bottom: 4rem;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 420px;
  text-align: center;
  margin: auto;

  button,
  input {
    margin-bottom: 2rem;
  }

  button {
    height: 5rem;
  }
`;

export const GithubIcon = styled(githubIcon)`
  margin-right: 1rem;
`;

export const LinkContainer = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;

  a {
    padding: 0 2rem;
    border-right: 1px solid gray;
  }
`;