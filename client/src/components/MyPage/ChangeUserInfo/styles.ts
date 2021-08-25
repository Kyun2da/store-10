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

export const NickNameContainer = styled.form`
  display: flex;
  position: relative;
  padding: 8rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 0.8rem;
  margin-bottom: 4rem;

  .input-container {
    margin-right: 2rem;
  }
`;

export const NewPasswordContainer = styled.form`
  display: flex;
  position: relative;
  flex-direction: column;
  padding-top: 2rem;
  padding: 8rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 0.8rem;

  button,
  .input-container {
    margin-top: 4rem;
  }
`;

export const ContainerTitle = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 2rem;
  margin: 2rem;
`;
