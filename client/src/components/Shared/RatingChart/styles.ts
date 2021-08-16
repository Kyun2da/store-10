import styled from 'styled-components';

interface IChartBar {
  count?: number;
}

export const RatingChart = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ChartBar = styled.div<IChartBar>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .bar {
    position: relative;
    width: 1rem;
    height: 100%;
    border-radius: 1rem;
    background-color: #ededed;

    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      border-radius: 1rem;
      height: ${({ count }) => (count ? count * 10 : 0)}%;
      background-color: #aaa;
    }

    &:hover {
      &::after {
        background-color: ${({ theme }) => theme.color.primary};
      }

      & ~ .hover-text {
        position: absolute;
        display: flex;
        justify-content: center;
        top: -1rem;
      }
    }
  }

  .hover-text {
    display: none;
    background-color: ${({ theme }) => theme.color.primary};
    padding: 0.5rem;
    ${({ theme }) => theme.fontSize.s};
    width: 2.5rem;
    box-sizing: content-box;
    color: #fff;
    border-radius: 1rem;
    transform: translateY(-100%);
  }
`;
