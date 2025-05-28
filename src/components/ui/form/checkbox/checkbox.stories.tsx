import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Checkbox, CheckboxProps } from "./index";
import { fn } from "@storybook/test";

export default {
  component: (props) => <Checkbox {...props} />,
  title: "Forms/Checkbox",
  args: {
    disabled: false,
    value: false,
    defaultChecked: false,
    onValueChange: fn(),
  },
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    value: {
      control: {
        type: "boolean",
      },
    },
    defaultChecked: {
      control: {
        type: "boolean",
      },
    },
  },
  tags: ["autodocs"],
} as Meta<CheckboxProps>;

export const Checked: StoryObj<CheckboxProps> = {
  args: {
    value: true,
    disabled: false,
  },
};

export const Unchecked: StoryObj<CheckboxProps> = {
  args: {
    value: false,
  },
};

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    value: false,
    disabled: true,
  },
};
