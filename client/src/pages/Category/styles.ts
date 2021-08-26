import { HEADER_HEIGHT } from '@/styles/globalStyle';
import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  max-width: ${({ theme }) => theme.media.pc}px;
  width: 95%;
  max-width: 1050px;
  margin: 0 auto;
`;

export const CategoryHeader = styled.div`
  font-family: BMDOHYEON;
  ${({ theme }) => theme.fontSize.xl}
  color: ${({ theme }) => theme.color['text-color']};
  margin: 2rem 0;
`;

export const CardLoader = styled.div`
  background: red;
  width: 100%;
  height: 300px;
`;

export const SubCategoriesTitles = styled.div`
  max-width: ${({ theme }) => theme.media.pc}px;
  width: 95%;
  white-space: nowrap;
  overflow: scroll;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;

  span {
    margin-right: 1rem;
    cursor: pointer;

    &.selected {
      color: ${({ theme }) => theme.color.primary};
    }

    &:after {
      content: '|';
      color: ${({ theme }) => theme.color['text-color']};
      margin-left: 1rem;
    }
    &:last-child::after {
      display: none;
    }
  }
`;

export const SubCategoriesWrap = styled.div`
  position: sticky;
  top: ${HEADER_HEIGHT}rem;
  padding: 1.5rem 0;
  background: ${({ theme }) => theme.color.background};
  box-shadow: ${({ theme }) => theme.headerBoxShadow};
  z-index: 500;
  ${({ theme }) => theme.fontSize.m};
  width: 100%;
`;
