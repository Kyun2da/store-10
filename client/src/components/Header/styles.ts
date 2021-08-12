import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.color['background']};
  position: sticky;
  z-index: 99;
  top: 0;
  border-bottom: 1px solid ${({ theme }) => theme.color['line']};
  ${({ theme }) => theme.fontSize.m}

  svg {
    width: 2.5rem;
    height: 2.5rem;
    stroke-width: 1.5px;
    cursor: pointer;
    stroke: ${({ theme }) => theme.color['text-color']};

    &.filled {
      fill: ${({ theme }) => theme.color['text-color']};
    }
  }
`;

export const Header = styled.div`
  display: grid;
  background: ${({ theme }) => theme.color['background']};
  grid-template-columns: 0.5fr 1fr 0.5fr;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  max-width: 1050px;
  padding: 1rem 0;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.media.tablet - 1}px) {
    grid-template-columns: 0.8fr 1fr;
  }
`;

export const Menu = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 2.5rem 1fr;
`;

export const MenuButton = styled.button`
  display: flex;
  position: relative;
  padding: 0;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const Logo = styled.div`
  color: ${({ theme }) => theme.color['text-color']};
  justify-self: center;
`;

export const StateUl = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-self: flex-end;

  a {
    text-decoration: none;
    svg {
      margin: 0 0.5rem;
    }
  }
`;
