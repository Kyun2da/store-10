import styled from 'styled-components';

export const SideBar = styled.div`
  position: fixed;
  z-index: 9;
  max-width: 300px;
  height: 100vh;
  width: 100%;
  ${({ theme }) => theme.fontSize.s};
  background: ${({ theme }) => theme.color['background']};
  transform: translateX(-100%);
  transition: transform 0.2s ease-in-out;

  &.active {
    transform: translateX(0);
    + .backdorp {
      display: block;
    }
  }
`;
export const Top = styled.div`
  color: ${({ theme }) => theme.color['text-color']};
  display: flex;
  height: 51px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color['line']};
  padding: 1.2rem 1rem;
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  a {
    height: 2.5rem;
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.media.tablet - 1}px) {
    a {
      display: block;
    }
  }
`;

export const Contents = styled.div``;

export const ContentTitle = styled.div`
  ${({ theme }) => theme.fontSize.l};
  ${({ theme }) => theme.fontWeight.xl};
  color: ${({ theme }) => theme.color['text-color']};
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
`;

export const Categories = styled.ul`
  margin: 0;
  padding: 0;
  ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.color['text-color']};
  li {
    list-style: none;
    cursor: pointer;
    padding: 1rem;
    transition: background 0.2s ease-in;
    ${({ theme }) => theme.fontWeight.l};
    &:hover {
      background: ${({ theme }) => theme.color['primary2']}66;
      color: ${({ theme }) => theme.color['primary3']};
      > dl {
        color: ${({ theme }) => theme.color['text-color']};
        visibility: visible;
        transition-delay: 0.2s;
      }
    }
  }
`;

export const SubCategory = styled.dl`
  position: absolute;
  background: ${({ theme }) => theme.color['background']};
  height: 100vh;
  right: 0;
  top: 0;
  margin: 0;
  padding-top: 3rem;
  overflow: hidden;
  border-left: 1px solid ${({ theme }) => theme.color['line']};
  transform: translateX(100%);
  visibility: hidden;
  transition: visibility 0.2s ease-in-out;

  dd {
    padding: 1rem;
    width: 150px;

    &:hover {
      background: ${({ theme }) => theme.color['primary2']}66;
      color: ${({ theme }) => theme.color['primary3']};
    }
  }
`;

export const Bottom = styled.div``;

export const Backdrop = styled.div`
  background: ${({ theme }) => theme.color['label']}33;
  display: none;
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;
`;
