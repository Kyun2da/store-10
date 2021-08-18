import App from '@/layouts/App';
import React from 'react';
import { render } from 'react-dom';
import { Router } from '@/lib/Router';
import GlobalStyle from '@/styles/globalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

render(
  <>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  </>,
  document.getElementById('app')
);
