import { Meta, StoryObj } from "@storybook/react";

import { DatePicker } from "./index";

export default {
  component: ({ ...args }) => <DatePicker {...args} />,
  title: "Forms/DatePicker",
  tags: ["autodocs"],
} as Meta<typeof DatePicker>;

export const Single: StoryObj<typeof DatePicker> = {
  args: {
    mode: "single",
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

export const Multiple: StoryObj<typeof DatePicker> = {
  args: {
    mode: "multiple",
    defaultValue: {
      from: new Date(),
      to: new Date(),
    },
  },
};
