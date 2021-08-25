import styled from 'styled-components';
import Checkbox from '../Shared/Checkbox';
import { BG_COLOR } from './Card';

export const Card = styled.li`
  display: flex;
  justify-content: space-between;
  height: 100%;
  flex-direction: column;
  color: ${({ theme }) => theme.color['text-color']};
  overflow: hidden;
  border-radius: 0.5rem;
  transition: transform 0.12s ease-in;

  border: 1px solid #ccd3d3;
  /* Elevation1 */

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  &:hover {
    transform: translateY(-0.5rem);
  }
`;

interface LinerProps {
  bgColor: BG_COLOR;
}

export const Liner = styled.div<LinerProps>`
  background-color: ${({ theme, bgColor }) => theme.color[bgColor]};
  height: 0.5rem;
`;

export const CardCheckbox = styled(Checkbox)`
  position: absolute;
  z-index: 200;
  margin: 1rem;
`;

export const BottomBar = styled.div`
  display: none;
  z-index: 100;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  padding: 1rem;
  box-sizing: border-box;
  bottom: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.75);

  svg {
    color: #111 !important;
  }
`;

export const NameTag = styled.div`
  position: absolute;
  user-select: none;
  z-index: 50;
  top: 1rem;
  right: 1rem;
  padding: 0.6rem;
  border-radius: 0.6rem;
  box-sizing: border-box;
  ${({ theme }) => theme.fontSize.m}
  color: #fff;
  background-color: ${({ theme }) => theme.color.error};
`;

export const ThumbnailWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.fontSize.s};

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
  .title {
    font-size: clamp(10px, 3vw, 1.2em);
    ${({ theme }) => theme.fontWeight.s};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin: 0.8rem 0.8rem 0 0.8rem;
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
  cursor: pointer;
  ${({ theme }) => theme.fontSize.m};

  .price-tag {
    ${({ theme }) => theme.fontWeight.l};
    font-size: clamp(10px, 3vw, 1em);
    margin: 0.5rem 0.8rem 0.8rem 0.8rem;

    &.strikethrough {
      margin: 0.5rem 0.8rem 0 0.8rem;
      font-size: clamp(10px, 3vw, 0.9em);
      text-decoration: line-through;
      color: ${({ theme }) => theme.color['text-color']}55;
    }
    &.discount {
      font-size: clamp(10px, 3.5vw, 1em);
      color: ${({ theme }) => theme.color['error']};
    }
  }
`;
