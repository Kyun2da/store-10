import App from '@/layouts/App';
import React from 'react';
import { render } from 'react-dom';
import { Router } from '@/lib/Router';
import GlobalStyle from '@/styles/globalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import ToastifyContainer from '@/components/Shared/Toastify';

const queryClient = new QueryClient();

render(
  <>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
      <ToastifyContainer />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  </>,
  document.getElementById('app')
);
