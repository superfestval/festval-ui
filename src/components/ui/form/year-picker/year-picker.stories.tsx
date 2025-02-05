import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { YearPicker } from "./index";

export default {
  render: ({ ...args }) => <YearPicker {...args} />,
  title: "Forms/YearPicker",
  tags: ["autodocs"],
} as Meta<typeof YearPicker>;

export const Default: StoryObj<typeof YearPicker> = {
  args: {
    onValueChange: fn(),
  },
};
