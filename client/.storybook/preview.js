const { addDecorator } = require('@storybook/react');
const { jsxDecorator } = require('storybook-addon-jsx');
const {
  withThemesProvider,
} = require('storybook-addon-styled-component-theme');
const { ThemeProvider } = require('styled-components');
const { lightMode, darkMode } = require('../src/styles/theme');

const themes = [lightMode, darkMode];
addDecorator(withThemesProvider(themes), ThemeProvider);
addDecorator(jsxDecorator);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
