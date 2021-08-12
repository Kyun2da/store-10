import styled from 'styled-components';

export const Search = styled.div`
  display: flex;
  position: relative;
  transition: width 0.5s ease-in-out;
  max-width: 400px;
  margin: 0 auto;
  width: 100%;

  input {
    height: 3rem;
    border-radius: 3rem;
    border: 1px solid #333;
    padding: 0 3rem 0 1.5rem;
    width: 100%;
    + .search-list {
      display: none;
    }
    &:focus {
      + .search-list {
        display: block;
      }
    }
  }
  svg {
    position: absolute;
    cursor: pointer;
    top: 50%;
    transform: translateY(-52%);
    background: none;
    border: none;
    right: 0.8rem;
  }
`;

export const SearchList = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.color['background']};
  color: ${({ theme }) => theme.color['text-color']};
  box-shadow: 0 1px 5px ${({ theme }) => theme.color['line']};
  border-radius: 0.8rem;
  transform-origin: top left;
  transform: translateY(100%);
  left: 2.5%;
  bottom: -1rem;
  margin: 0;
  padding: 1rem 2rem 2rem;
  width: 95%;

  ul {
    list-style: none;
    li {
      cursor: pointer;
      margin: 0.5rem 0;
      ${({ theme }) => theme.fontSize.s};
    }
  }
`;

export const RecentTitle = styled.div`
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  border-bottom: 1px solid #333;
`;
