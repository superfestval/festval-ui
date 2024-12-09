import { Meta, StoryObj } from "@storybook/react";

import { Input, InputProps } from "./index";
import { Label } from "../label";

export default {
  component: ({ ...props }) => (
    <>
      <Label htmlFor="input">Label</Label>
      <Input id="input" {...props} />
    </>
  ),
  title: "Forms/Input",
  argTypes: {},
} as Meta<InputProps>;

export const Default: StoryObj<InputProps> = {};

export const HasError: StoryObj<Meta<InputProps>> = {
  args: {
    error: "Any error here",
  },
};

export const Mask: StoryObj<Meta<InputProps>> = {
  args: {
    mask: "+0 (___) ___-__-__",
    replacement: {},
  },
};
