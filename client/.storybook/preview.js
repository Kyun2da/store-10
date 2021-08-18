const { addDecorator } = require('@storybook/react');
const { jsxDecorator } = require('storybook-addon-jsx');
const { withThemesProvider } = require('themeprovider-storybook');
const { lightMode, darkMode } = require('../src/styles/theme');
const GlobalStyle = require('../src/styles/globalStyle').default;
const { ThemeProvider } = require('styled-components');
const React = require('react');
const { QueryClient, QueryClientProvider } = require('react-query');

const themes = [lightMode, darkMode];
addDecorator(jsxDecorator);
addDecorator(withThemesProvider(themes), ThemeProvider);

const queryClient = new QueryClient();

export const decorators = [
  (Story) => (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Story />
      </QueryClientProvider>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
