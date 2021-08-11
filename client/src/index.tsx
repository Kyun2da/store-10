import App from '@/layouts/App';
import React from 'react';
import { render } from 'react-dom';
import { Router } from '@/core/Router';
import GlobalStyle from '@/styles/globalStyle';

render(
  <>
    <GlobalStyle />
    <Router>
      <App />
    </Router>
  </>,
  document.getElementById('app')
);
