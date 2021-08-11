const { addDecorator } = require('@storybook/react');
const { makeDecorator } = require('@storybook/addons');
const { jsxDecorator } = require('storybook-addon-jsx');
const {
  withThemesProvider,
} = require('storybook-addon-styled-component-theme');
const { ThemeProvider } = require('styled-components');
const { lightMode, darkMode } = require('../src/styles/theme');
const GlobalStyle = require('../src/styles/globalStyle');

// const themes = [lightMode, darkMode];
// addDecorator(withThemesProvider(themes), ThemeProvider);
addDecorator(jsxDecorator);

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
