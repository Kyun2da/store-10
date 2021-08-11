const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    'storybook-addon-jsx',
    'storybook-dark-mode',
    'storybook-addon-designs',
    'storybook-addon-styled-component-theme/dist/preset',
  ],
  webpackFinal: async (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src');

    const fileLoaderRule = config.module.rules.find((rule) => {
      const inRule = Array.isArray(rule.test) ? rule.test[0] : rule.test;
      return inRule.test('.svg');
    });
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack'),
    });

    return config;
  },
};
