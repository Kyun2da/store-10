import React, { useState } from 'react';
import Header from '@/components/Header';
import { Route, Switch } from '@/core/Router';
import Main from '@/pages/Main';
import Detail from '@/pages/Detail';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import NavLinks from '@/pages/NavLinks';
import { ThemeProvider } from 'styled-components';
import { lightMode, darkMode } from '@/styles/theme';

const App = () => {
  const [theme, setTheme] = useState('light-mode');
  const themeMode = theme === 'light-mode' ? lightMode : darkMode;

  const toggleMode = () =>
    setTheme(theme === 'light-mode' ? 'dark-mode' : 'light-mode');

  return (
    <ThemeProvider theme={themeMode}>
      <div>
        <button onClick={toggleMode}>모드전환 버튼</button>
        <Header />
        <Banner />
        <Switch>
          <Route path="/main" component={Main} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/navlink" component={NavLinks} />
        </Switch>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
