# react-native-web

If you’re building React Native (RN) components, Storybook has two options: `Native` and `Web`.

Both options provide a catalog of your stories that hot refreshes as you edit the code in your favorite editor. However, their implementations are quite different:

- **Native** - Runs inside your React Native application. It’s high-fidelity but has a limited feature set.
- **Web** - Displays your React Native components in the browser. It’s based on Storybook for Web, which is feature-rich and mature.
  So, which option is right for you?

**Native**. You should choose this option if you want:

- Native features - Your components rely on device-specific features like native modules. It runs in your actual application, in-simulator, or on-device and provides full fidelity. The web version uses react-native-web, which works for most components but has limitations.
- Mobile publication - You want to share your Storybook on-device as part of a test build or embedded inside your application.

**Web**. You should choose this option if you want:

- Sharing - Publish to the web and share with your team or publicly.
- Documentation - Auto-generated component docs or rich markdown docs in MDX.
- Testing - Component, visual, and a11y tests for your components.
- Addons - 500+ addons that improve development, documentation, testing, and integration with other tools.

Both. It’s also possible to use both options together. However, this increases Storybook’s install footprint and requires more work to configure. Therefore, we recommend choosing one option to start and extending it once you have something working.
