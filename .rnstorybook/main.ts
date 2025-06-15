// import {StorybookConfig} from '@storybook/react-native';
// import { StorybookConfig } from "@storybook/react-vite";
// import {StorybookConfig} from '@storybook/react-native-web-vite';
import type {StorybookConfig} from '@storybook/react-native-web-vite';

const config: StorybookConfig = {
  stories: ['../components/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-ondevice-notes',
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-backgrounds',
    '@storybook/addon-ondevice-actions',
  ],
  framework: {
    name: '@storybook/react-native-web-vite',
    options: {
      pluginReactOptions: {
        babel: {
          plugins: [
            '@babel/plugin-proposal-export-namespace-from',
            'react-native-reanimated/plugin',
          ],
        },
      },
    },
  },
};

export default config;
