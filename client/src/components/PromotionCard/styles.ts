import styled from 'styled-components';

export const PromotionWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

export const PromotionCard = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  align-items: center;
  max-height: 250px;
  justify-content: flex-end;
  border-radius: 1rem;
  cursor: pointer;
  margin: 1rem 0;
  overflow: hidden;

  img {
    transition: transform 0.3s;
    position: absolute;
    height: 100%;
    width: 100%;
    pointer-events: none;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

export const PromotionText = styled.div`
  height: 250px;
  max-width: 200px;
  width: 200px;
  margin-right: 2rem;
  position: relative;
  pointer-events: none;
  display: grid;
`;
export const PromotionTitle = styled.div`
  font-size: 3rem;
  font-family: BMDOHYEON;
  align-self: end;
  pointer-events: none;
`;
export const PromotionContent = styled.div`
  font-size: 2rem;
  pointer-events: none;
`;
