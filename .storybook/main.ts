/** @type{import("@storybook/react-webpack5").StorybookConfig} */
module.exports = {
  stories: ['../stories/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-docs'],

  framework: {
    name: '@storybook/react-native-web-vite',
    options: {},
  },

  typescript: {
    reactDocgen: 'react-docgen',
  }
};
