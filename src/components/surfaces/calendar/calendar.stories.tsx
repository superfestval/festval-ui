import { Meta, StoryObj } from "@storybook/react";

import { Calendar } from "./index";

export default {
  component: ({ ...args }) => <Calendar {...args} />,
  title: "Surfaces/Calendar",
  tags: ["autodocs"],
} as Meta<typeof Calendar>;

export const Default: StoryObj<typeof Calendar> = {
  args: {
    mode: "single",
  },
  argTypes: {
    mode: {
      control: {
        type: "select",
      },
      options: ["single", "multiple", "range"],
    },
  },
};

export const Range: StoryObj<typeof Calendar> = {
  args: {
    mode: "range",
  },
  argTypes: {
    mode: {
      control: {
        type: "select",
      },
      options: ["single", "multiple", "range"],
    },
  },
};

export const Multiple: StoryObj<typeof Calendar> = {
  args: {
    mode: "multiple",
  },
  argTypes: {
    mode: {
      control: {
        type: "select",
      },
      options: ["single", "multiple", "range"],
    },
  },
};
