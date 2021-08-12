import styled from 'styled-components';

export const Carousel = styled.div`
  ul.control-dots {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 25rem;

  img {
    height: 100%;
    object-fit: cover;
  }
`;

interface IIndicator {
  isSelected: boolean;
}

export const Indicator = styled.div<IIndicator>`
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 0.6rem;
  cursor: pointer;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.primary : '#fff'};

  &:hover {
    opacity: 0.85;
  }
`;
