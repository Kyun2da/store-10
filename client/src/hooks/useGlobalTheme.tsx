import { useState } from 'react';
import { lightMode, darkMode } from '@/styles/theme';
import { DefaultTheme } from 'styled-components';

const useGlobalTheme = (): [DefaultTheme, () => void, string] => {
  const localTheme =
    localStorage.getItem('Theme') === 'dark-mode' ? 'dark-mode' : 'light-mode';
  const [theme, setTheme] = useState(localTheme);

  const themeMode = theme === 'light-mode' ? lightMode : darkMode;
  const toggleMode = () => {
    const _theme = theme === 'light-mode' ? 'dark-mode' : 'light-mode';

    setTheme(_theme);
    localStorage.setItem('Theme', _theme);
  };

  return [themeMode, toggleMode, localTheme];
};

export default useGlobalTheme;
