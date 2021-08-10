import App from '@/layouts/App';
import React from 'react';
import { hydrate } from 'react-dom';
import { Router } from './core/Router';
import GlobalStyle from './styles/globalStyle';

hydrate(
  <>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </>,
  document.getElementById('app')
);
