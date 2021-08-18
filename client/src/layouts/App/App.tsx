import React, { Suspense, useState } from 'react';
import Header from '@/components/Header';
import { Route, Switch } from '@/lib/Router';
import Main from '@/pages/Main';
import Detail from '@/pages/Detail';
import Footer from '@/components/Footer';
import ShoppingCart from '@/pages/ShoppingCart';
import MyPage from '@/pages/Mypage';
import { ThemeProvider } from 'styled-components';
import { lightMode, darkMode } from '@/styles/theme';
import * as S from './styles';
import Login from '@/pages/Login';
import NotFound from '@/components/NotFound';
import SelectAuth from '@/pages/SelectAuth';
import Approval from '@/pages/Approval';
import SignUp from '@/pages/SignUp';
import Notice from '@/pages/Notice';
import Loading from '@/components/Shared/Loading';
import { QueryErrorResetBoundary } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '@/components/Shared/Error';

const App = () => {
  const [theme, setTheme] = useState('light-mode');
  const themeMode = theme === 'light-mode' ? lightMode : darkMode;

  const toggleMode = () =>
    setTheme(theme === 'light-mode' ? 'dark-mode' : 'light-mode');

  return (
    <ThemeProvider theme={themeMode}>
      <Suspense fallback={<Loading />}>
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary
              onReset={reset}
              fallbackRender={({ resetErrorBoundary }) => (
                <Error resetErrorBoundary={resetErrorBoundary} />
              )}
            >
              <S.RootWrapper>
                <S.ToggleButton onClick={toggleMode}>
                  라이트/다크모드
                </S.ToggleButton>
                <Header />
                <Switch>
                  <Route path="/" component={Main} />
                  <Route path="/select_auth" component={SelectAuth} />
                  <Route path="/approval/:authtype" component={Approval} />
                  <Route path="/signup" component={SignUp} />
                  <Route path="/login" component={Login} />
                  <Route path="/detail/:id" component={Detail} />
                  <Route path="/notice" component={Notice} />
                  <Route path="/cart" component={ShoppingCart} />
                  <Route path="/mypage" component={MyPage} />
                  <Route path="/*" component={NotFound} />
                </Switch>
                <Footer />
              </S.RootWrapper>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
