import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  globalTypes: {
    themes: ["light", "dark"],
  },
  globals: {
    themes: ["light", "dark"],
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
