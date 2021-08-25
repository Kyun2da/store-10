import styled from 'styled-components';
import Checkbox from '../Shared/Checkbox';

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
  bgColor: 'primary' | 'error';
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
    ${({ theme }) => theme.fontSize.m};
    ${({ theme }) => theme.fontWeight.s};
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1em;
    max-height: 2em;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin-top: 0.5rem;
    margin-left: 1rem;
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

  .price-tag {
    ${({ theme }) => theme.fontSize.m};
    ${({ theme }) => theme.fontWeight.l};
    margin-left: 1rem;

    &.strikethrough {
      ${({ theme }) => theme.fontSize.s};
      text-decoration: line-through;
      color: ${({ theme }) => theme.color['text-color']}55;
      margin-bottom: 0.5rem;
    }
    &.discount {
      color: ${({ theme }) => theme.color['error']};
    }
  }
`;
