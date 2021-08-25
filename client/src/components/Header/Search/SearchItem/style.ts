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

export const SearchItemWrap = styled.div`
  min-height: 60vh;
  max-height: 60vh;
  overflow: scroll;
`;

export const SearchItemWrapper = styled.ul`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: ${({ theme }) => theme.media.tablet}px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.media.phone}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  gap: 1rem;
  padding: 5px;
  overflow: scroll;

  > div {
    height: 100%;
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

export const SearchItemTitle = styled.div`
  ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color['text-color']};
  @media (max-width: ${({ theme }) => theme.media.phone}px) {
    ${({ theme }) => theme.fontSize.xs};
  }
`;
export const SearchItemPrice = styled.div`
  color: ${({ theme }) => theme.color['error']};
  ${({ theme }) => theme.fontSize.m};
  @media (max-width: ${({ theme }) => theme.media.tablet}px) {
    ${({ theme }) => theme.fontSize.s};
  }
  @media (max-width: ${({ theme }) => theme.media.phone}px) {
    ${({ theme }) => theme.fontSize.xs};
  }
`;

export const RecentSearchUl = styled.ul`
  li {
    color: ${({ theme }) => theme.color['text-color']};
    margin: 0.6rem 0;
    cursor: pointer;
  }
`;

export const SearchItemInfo = styled.div`
  font-size: 1.1em;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
