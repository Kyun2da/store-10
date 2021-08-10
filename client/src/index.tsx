import App from '@/layouts/App';
import React from 'react';
import { hydrate } from 'react-dom';
import GlobalStyle from './styles/globalStyle';
import { Router } from '@/core/router';

hydrate(
  <>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </>,
  document.getElementById('app')
);
