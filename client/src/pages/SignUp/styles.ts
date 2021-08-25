import styled from 'styled-components';

export const SignUpContainer = styled.div`
  width: 420px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;

  h2 {
    margin-bottom: 5rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  .input-container,
  button {
    margin-bottom: 4rem;
  }
`;

export const EmailContainer = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    flex: 2;
    margin-right: 2rem;
  }

  button {
    border-radius: 10px;
    border: 1px solid #c1c5c5;
  }
`;
