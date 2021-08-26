import styled from 'styled-components';
import { MoonSVG, SunSVG, ArrowTopSVG } from '@/assets/svgs';

const SvgSize = {
  width: '3rem',
  height: '3rem',
};

export const ThemeChangerWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0px;
  right: 0px;
  padding-right: 1.5rem;
  padding-bottom: 1.5rem;
  user-select: none;
`;

export const ThemeButtonSVG = styled.svg`
  width: 1rem;
  height: 1rem;
`;

export const ThemeButton = styled.button`
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 2px 0px;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  background-color: ${({ theme }) =>
    theme.name == 'light-mode' ? 'white' : 'rgb(51, 54, 56)'};
  color: ${({ theme }) => theme.color['text-color']};
  ${({ theme }) => theme.fontSize.s};
  padding: 0.5rem;
  border-radius: 9999px;
  --transform-translate-x: 0;
  --transform-translate-y: 0;
  --transform-rotate: 0;
  --transform-skew-x: 0;
  --transform-skew-y: 0;
  --transform-scale-x: 1;
  --transform-scale-y: 1;
  transform: translateX(var(--transform-translate-x))
    translateY(var(--transform-translate-y)) rotate(var(--transform-rotate))
    skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y))
    scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));
  cursor: pointer;
  display: flex;
  align-items: center;
  z-index: 100;

  span {
    padding: 0 0.3rem;
    @media (max-width: ${({ theme }) => theme.media.tablet - 1}px) {
      display: none;
    }
  }
`;

export const ScrollButton = styled.button`
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 2px 0px;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  background-color: ${({ theme }) =>
    theme.name == 'light-mode' ? 'white' : 'rgb(51, 54, 56)'};
  color: ${({ theme }) => theme.color['text-color']};
  font-size: 0.75rem;
  padding: 0.4rem 0.5rem;
  border-radius: 9999px;
  --transform-translate-x: 0;
  --transform-translate-y: 0;
  --transform-rotate: 0;
  --transform-skew-x: 0;
  --transform-skew-y: 0;
  --transform-scale-x: 1;
  --transform-scale-y: 1;
  transform: translateX(var(--transform-translate-x))
    translateY(var(--transform-translate-y)) rotate(var(--transform-rotate))
    skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y))
    scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));
  cursor: pointer;
  margin-left: 0.5rem;
  margin-top: auto;
  margin-bottom: auto;
  z-index: 100;
`;

export const MoonSvg = styled(MoonSVG)`
  fill: currentcolor;
  --text-opacity: 1;
  color: rgba(246, 224, 94, var(--text-opacity));
  margin: auto 0px;
  ${SvgSize}
`;

export const SunSvg = styled(SunSVG)`
  fill: rgba(252, 129, 129, var(--text-opacity));
  --text-opacity: 1;
  color: rgba(252, 129, 129, var(--text-opacity));
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 0px;
  ${SvgSize}
`;

export const ArrowSvg = styled(ArrowTopSVG)`
  ${SvgSize}
`;
