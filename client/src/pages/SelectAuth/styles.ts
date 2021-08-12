import styled from 'styled-components';

export const SelectAuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;

  h3,
  h4,
  h5,
  button {
    margin-bottom: 2rem;
  }

  button {
    height: 6rem;
  }
`;

export const BackLoginContainer = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color.line};

  a {
    margin-left: 1rem;
    color: ${({ theme }) => theme.color['text-color']};
  }
`;
