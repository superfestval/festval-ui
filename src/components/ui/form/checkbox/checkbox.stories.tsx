import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Checkbox, CheckboxProps } from "./index";

export default {
  component: Checkbox,
  title: "Forms/Checkbox",
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    checked: {
      control: {
        type: "boolean",
      },
    },
  },
  tags: ["autodocs"],
} as Meta<CheckboxProps>;

export const Checked: StoryObj<CheckboxProps> = {
  args: {
    checked: true,
    disabled: false,
  },
};

export const Unchecked: StoryObj<CheckboxProps> = {
  args: {
    checked: false,
  },
};

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    checked: false,
    disabled: true,
  },
};
