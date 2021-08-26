import React, { useCallback } from 'react';
import * as S from './styles';

interface Props {
  toggleMode: () => void;
  currentTheme: string;
}

const ThemeChanger = ({ ...props }: Props) => {
  const { toggleMode, currentTheme } = props;
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <S.ThemeChangerWrapper>
      {currentTheme === 'light-mode' ? (
        <S.ThemeButton title="change to darkmode" onClick={toggleMode}>
          <S.MoonSvg />
          <span>다크 모드로 보기</span>
        </S.ThemeButton>
      ) : (
        <S.ThemeButton title="change to lightmode" onClick={toggleMode}>
          <S.SunSvg />
          <span>라이트 모드로 보기</span>
        </S.ThemeButton>
      )}
      <S.ScrollButton title="top page" onClick={scrollToTop}>
        <S.ArrowSvg />
      </S.ScrollButton>
    </S.ThemeChangerWrapper>
  );
};

export default ThemeChanger;
