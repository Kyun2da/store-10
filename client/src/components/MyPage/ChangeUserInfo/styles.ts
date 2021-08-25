import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10rem;
  text-align: center;
  padding: 8rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 0.8rem;

  button,
  .input-container {
    margin-bottom: 2rem;
  }
`;

export const Information = styled.p`
  font-size: 2rem;
`;

export const PasswordContainer = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 4rem;

  .input-container {
    margin-right: 2rem;
  }
`;

export const NickNameContainer = styled.div`
  display: flex;
  padding: 2rem 0;

  .input-container {
    margin-right: 2rem;
  }
`;

export const NewPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.color.line};

  .input-container {
    margin-top: 2rem;
  }
`;
