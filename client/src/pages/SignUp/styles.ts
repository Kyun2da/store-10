import styled from 'styled-components';

export const SignUpContainer = styled.div`
  width: 420px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;
  padding-top: 5rem;

  h2 {
    margin-bottom: 5rem;
  }

  @media (max-width: ${({ theme }) => theme.media.phone - 1}px) {
    width: 260px;

    h2 {
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

    label {
      ${({ theme }) => theme.fontSize.xs}
      line-height: 0.5rem;

      &.focusing {
        transform: translate(6px, -12px) scale(0.75);
      }
    }
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
