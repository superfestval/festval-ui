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
} as Meta<CheckboxProps>;

const Template = ({ ...props }) => <Checkbox {...props} />;

export const Default: StoryObj<CheckboxProps> = Template.bind({});
Default.args = {
  checked: true,
};
