import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";

addons.setConfig({
  theme: {
    ...themes.dark,
    brandTitle: "Super Festval | UI Kit",
    brandImage: "logo.svg",
    brandUrl: "https://superfestval.github.io/festval-ui/",
  },
});
