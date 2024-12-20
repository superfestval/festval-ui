import { Meta, StoryObj } from "@storybook/react";

import { DatePicker } from "./index";

export default {
  component: ({ ...args }) => <DatePicker {...args} />,
  title: "Forms/DatePicker",
  tags: ["autodocs"],
} as Meta<typeof DatePicker>;

export const Default: StoryObj<typeof DatePicker> = {};
