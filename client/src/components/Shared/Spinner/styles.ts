import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  margin: 0;
  &.loader,
  .loader:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }

  &.loader {
    font-size: 1rem;
    position: relative;
    border-top: 1.1em solid rgba(200, 200, 200, 0.2);
    border-right: 1.1em solid rgba(200, 200, 200, 0.2);
    border-bottom: 1.1em solid rgba(200, 200, 200, 0.2);
    border-left: 1.1em solid ${({ theme }) => theme.color.primary};
    transform: translateZ(0);
    animation: load8 1.1s infinite linear;
  }

  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
