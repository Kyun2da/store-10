const { addDecorator } = require('@storybook/react');
const { jsxDecorator } = require('storybook-addon-jsx');
import { withThemesProvider } from 'themeprovider-storybook';
const { lightMode, darkMode } = require('../src/styles/theme');
const GlobalStyle = require('../src/styles/globalStyle').default;
const { ThemeProvider } = require('styled-components');

const themes = [lightMode, darkMode];
addDecorator(jsxDecorator);
addDecorator(withThemesProvider(themes), ThemeProvider);

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
