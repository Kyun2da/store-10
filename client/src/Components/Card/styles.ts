import styled from 'styled-components';

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color['text-color']};
  overflow: hidden;
  border-radius: 0.5rem;
  transition: transform 0.12s ease-in;

  &:hover {
    transform: translateY(-0.5rem);
  }
`;

interface LinerProps {
  bgColor: 'primary' | 'error';
}

export const Liner = styled.div<LinerProps>`
  background-color: ${({ theme, bgColor }) => theme.color[bgColor]};
  height: 0.3rem;
`;

export const BottomBar = styled.div`
  display: none;
  z-index: 100;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  padding: 0 1rem;
  box-sizing: border-box;
  bottom: 0;
  width: 100%;
  height: 3rem;
  background-color: rgba(255, 255, 255, 0.75);
`;

export const ThumbnailWrapper = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
    transition: transform 0.25s ease-in;
    cursor: pointer;

    &:hover {
      opacity: 0.75;
      transform: scale(1.012);
    }
  }

  &:hover ${BottomBar} {
    display: flex;
  }
`;

export const ButtonArea = styled.div`
  svg {
    cursor: pointer;
  }
  &:hover {
    opacity: 0.75;
  }
`;

export const ProductDetails = styled.div`
  padding: 1rem 0;
  cursor: pointer;
  ${({ theme }) => theme.fontSize.s}

  .title {
    ${({ theme }) => theme.fontSize.s};
    ${({ theme }) => theme.fontWeight.s};
    margin-bottom: 0.5rem;
  }

  .price-tag {
    ${({ theme }) => theme.fontSize.s};
    ${({ theme }) => theme.fontWeight.l};
  }
`;
