import "../src/styles/global.css";
import { themes } from "@storybook/theming";

import React from "react";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
      autodocs: true,
    },
  },
};

global.React = React;

export default preview;
