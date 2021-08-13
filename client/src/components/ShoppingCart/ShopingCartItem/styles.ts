import styled from 'styled-components';

export const ShoppingCartItem = styled.li`
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.body};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  height: 15rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
  background: ${({ theme }) => theme.color['off-white']};
  &:not(:first-child) {
    margin-top: 1rem;
  }
  label {
    padding-right: 1rem;
  }
  overflow: hidden;
`;

export const ImgWrapper = styled.div`
  height: 12rem;
  flex: 0 0 12rem;
  border-radius: 0.8rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1.2rem;
`;

export const TotalPrice = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.media.tablet + 200}px) {
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: ${({ theme }) => theme.media.tablet}px) {
    justify-content: space-between;
    flex-direction: row;
  }
  @media (max-width: ${({ theme }) => theme.media.phone}px) {
    justify-content: center;
    flex-direction: column;
  }
  > span {
    ${({ theme }) => theme.fontSize.m};
  }

  div {
    padding: 0.6rem;
    display: flex;
    align-items: center;

    button {
      outline: none;
      border: none;
      background: none;
      cursor: pointer;
      ${({ theme }) => theme.fontSize.m};
      width: 2rem;
      height: 2rem;
      border-radius: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color['off-white']};
      &:hover {
        opacity: 0.4;
      }
    }

    span {
      ${({ theme }) => theme.fontSize.l};
      padding: 0 1rem;
    }
  }
`;

export const ItemInfoName = styled.span`
  ${({ theme }) => theme.fontSize.m};
`;
export const ItemInfoPrice = styled.span`
  ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.color.label};
  margin-top: 10px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 4rem;
  height: 4rem;
  &:hover {
    opacity: 0.4;
  }
`;
