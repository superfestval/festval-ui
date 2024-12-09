import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonProps } from ".";

export default {
  render: ({ children, ...rest }) => <Button {...rest}>{children}</Button>,
  component: Button,
  title: "Forms/Button",
  tags: ["autodocs"],
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
  args: {
    variant: "default",
    children: "Button",
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const Link: StoryObj<ButtonProps> = {
  args: {
    variant: "link",
    children: "Button",
    as: "a",
    href: "#",
  },
};
