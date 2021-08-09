import App from '@/layouts/App';
import React from 'react';
import { render } from 'react-dom';
import GlobalStyle from './styles/globalStyle';

render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('app')
);
