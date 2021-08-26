import { CardWrapper } from '@/components/CardWrapper/styles';
import styled from 'styled-components';

export const SearchItemsInfo = styled.div``;

export const RecentTitle = styled.div`
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color.label};

  min-height: calc(-50vh + 80px);
`;

export const SearchItem = styled.div`
  cursor: pointer;
`;

export const SearchItemWrapper = styled(CardWrapper)`
  min-height: 60vh;
  max-height: 60vh;
  margin-bottom: 2rem;
  padding: 0.5rem;
  overflow: scroll;
  > div {
    max-height: 320px;
  }
  &:after {
    content: '';
    grid-column: 1 / -1;
    height: 1rem;
  }
`;

export const SearchItemList = styled.li`
  border-radius: 0.5rem;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 0 4px #000;

  img {
    width: 100%;
  }
`;

export const RecentSearchUl = styled.ul`
  li {
    color: ${({ theme }) => theme.color['text-color']};
    margin: 0.6rem 0;
    cursor: pointer;
  }
`;
