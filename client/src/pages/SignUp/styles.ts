import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  text-align: center;
  margin: auto;

  h2 {
    margin-bottom: 5rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  input,
  button {
    margin-bottom: 2rem;
  }
`;

export const EmailContainer = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    flex: 2;
    margin-right: 2rem;
  }

  button {
    border-radius: 10px;
    border: 1px solid #c1c5c5;
  }
`;
