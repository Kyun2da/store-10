import styled, { keyframes } from 'styled-components';

const waveKeyframe = keyframes`
0% {
  transform: translateX(-100%);
}
50% {
  /* +0.5s of delay between each loop */
  transform: translateX(100%);
}
100% {
  transform: translateX(100%);
}
`;
export const SkeletonCard = styled.li`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color['text-color']};
  overflow: hidden;
  border-radius: 0.5rem;
  transition: transform 0.12s ease-in;
`;

export const SkeletonImg = styled.div`
  width: 24rem;
  height: 24rem;
  border-radius: 10px;
  background: #f2f2f2;
  position: relative;
  overflow: hidden;
  object-fit: cover;

  ::after {
    animation: ${waveKeyframe} 1.6s linear 0.5s infinite;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 0, 0, 0.05),
      transparent
    );
    content: '';
    position: absolute;
    transform: translateX(-100%); /* Avoid flash during server-side hydration */
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }
`;

export const SkeletonTitle = styled.div`
  margin: 1rem 0 0.5rem 0;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  width: 90%;
  height: 24px;
  background: #f2f2f2;

  ${({ theme }) => theme.fontSize.m};
  ${({ theme }) => theme.fontWeight.s};

  ::after {
    width: 100%;
    animation: ${waveKeyframe} 1.6s linear 0.5s infinite;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 0, 0, 0.05),
      transparent
    );
    content: '';
    position: absolute;
    transform: translateX(-100%);
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }
`;

export const SkeletonPrice = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  width: 50%;
  height: 24px;
  background: #f2f2f2;

  ${({ theme }) => theme.fontSize.m};
  ${({ theme }) => theme.fontWeight.s};

  ::after {
    width: 100%;
    animation: ${waveKeyframe} 1.6s linear 0.5s infinite;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 0, 0, 0.05),
      transparent
    );
    content: '';
    position: absolute;
    transform: translateX(-100%);
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }
`;
