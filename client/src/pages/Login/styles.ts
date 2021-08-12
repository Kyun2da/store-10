import styled from 'styled-components';
import githubIcon from '@/assets/github.svg';
import Title from '@/components/Title';

export const LoginTitle = styled(Title)`
  margin-bottom: 2rem;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 420px;
  text-align: center;
  margin: auto;

  button,
  input {
    margin-bottom: 1.5rem;
  }

  button {
    height: 3rem;
  }
`;

export const GithubIcon = styled(githubIcon)`
  margin-right: 1rem;
`;

export const LinkContainer = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;

  a {
    padding: 0 1rem;
    border-right: 1px solid gray;
  }
`;
