import { Meta, StoryObj } from "@storybook/react";

import { Label, LabelProps } from "./index";

export default {
  component: () => <Label>Label</Label>,
  title: "Forms/Label",
  argTypes: {},
} as Meta<LabelProps>;

export const Default: StoryObj = {};
