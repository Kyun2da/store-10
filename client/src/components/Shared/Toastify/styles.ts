import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const StyledToastContainer = styled(ToastContainer).attrs({
  className: 'toast-container',
  toastClassName: 'toast',
  bodyClassName: 'body',
})`
  width: fit-content;

  .toast {
    border-radius: 10rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.1);
    min-height: 54px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;

  div {
    font-family: 'BMDOHYEON';
    font-size: 2rem;
    color: black;
    display: flex;
    align-items: center;
  }
`;
