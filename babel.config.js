module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'transform-inline-environment-variables',
    ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
    'react-native-reanimated/plugin',
    'react-native-paper/babel'
  ],
};
