import styled from 'styled-components';
import { ProgressProps } from './ProgressBar';

export const ProgressBarContainer = styled.svg<ProgressProps>`
  border-radius: 7px;
  color: #35495e;
  overflow: initial;

  .progress-container {
    stroke: #eee;
  }
  .progress-content {
    stroke: ${({ theme }) => theme.color.primary};
  }

  .progress-content > line {
    stroke-dasharray: 100%;
    stroke-dashoffset: ${(props) => `${props.percent}%` || '0%'};
    animation: svg-progress 2s ease-out;
  }

  @keyframes svg-progress {
    0% {
      stroke-dashoffset: 100%;
    }
    100% {
      stroke-dashoffset: ${(props) => `${props.percent}%` || '0%'};
    }
  }
`;
