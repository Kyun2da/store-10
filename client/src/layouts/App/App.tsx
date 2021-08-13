import React, { useState } from 'react';
import Header from '@/components/Header';
import { Route, Switch } from '@/core/Router';
import Main from '@/pages/Main';
import Detail from '@/pages/Detail';
import Footer from '@/components/Footer';
import NavLinks from '@/pages/NavLinks';
import ShoppingCart from '@/pages/ShoppingCart';
import MyPage from '@/pages/mypage';
import { ThemeProvider } from 'styled-components';
import { lightMode, darkMode } from '@/styles/theme';
import * as S from './styles';
import Login from '@/pages/Login';
import NotFound from '@/components/NotFound';

const App = () => {
  const [theme, setTheme] = useState('light-mode');
  const themeMode = theme === 'light-mode' ? lightMode : darkMode;

  const toggleMode = () =>
    setTheme(theme === 'light-mode' ? 'dark-mode' : 'light-mode');

  return (
    <ThemeProvider theme={themeMode}>
      <S.RootWrapper>
        <S.ToggleButton onClick={toggleMode}>라이트/다크모드</S.ToggleButton>
        <Header />
        <Switch>
          <Route path="/main" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/navlink" component={NavLinks} />
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/mypage" component={MyPage} />
          <Route path="/*" component={NotFound} />
        </Switch>
        <Footer />
      </S.RootWrapper>
    </ThemeProvider>
  );
};

export default App;
