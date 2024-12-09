import { Meta, StoryObj } from "@storybook/react";

import { Label, LabelProps } from "./index";

export default {
  component: Label,
  title: "Forms/Label",
  tags: ["autodocs"],
} as Meta<LabelProps>;

export const Default: StoryObj = {
  args: {
    children: "Label",
  },
};
