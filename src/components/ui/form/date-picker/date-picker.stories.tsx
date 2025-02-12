import { Meta, StoryObj } from "@storybook/react";

import { DatePicker } from "./index";

export default {
  component: ({ ...args }) => <DatePicker {...args} />,
  title: "Forms/DatePicker",
  tags: ["autodocs"],
} as Meta<typeof DatePicker>;

export const Single: StoryObj<typeof DatePicker> = {
  args: {
    defaultValue: new Date(),
  },
};

export const Range: StoryObj<typeof DatePicker> = {
  args: {
    mode: "range",
    defaultValue: {
      from: new Date(),
      to: new Date(),
    },
  },
};
