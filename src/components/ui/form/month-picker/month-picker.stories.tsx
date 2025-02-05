import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { MonthPicker } from "./index";

export default {
  render: ({ ...args }) => <MonthPicker {...args} />,
  title: "Forms/MonthPicker",
  tags: ["autodocs"],
} as Meta<typeof MonthPicker>;

export const Default: StoryObj<typeof MonthPicker> = {
  args: {
    onValueChange: fn(),
  },
};

export const MonthYear: StoryObj<typeof MonthPicker> = {
  args: {
    mode: "month-year",
    onValueChange: fn(),
    defaultValue: "2025-02",
  },
};
