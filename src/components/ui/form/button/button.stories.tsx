import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonProps } from ".";
import { ArrowLeft, ArrowRight } from "lucide-react";

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

export const Destructive: StoryObj<ButtonProps> = {
  args: {
    variant: "destructive",
    children: "Button",
  },
};

export const Ghost: StoryObj<ButtonProps> = {
  args: {
    variant: "ghost",
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

export const IconLeft: StoryObj<ButtonProps> = {
  args: {
    children: "Button",
    iconLeft: ArrowLeft,
  },
};

export const IconRight: StoryObj<ButtonProps> = {
  args: {
    children: "Button",
    iconRight: ArrowRight,
  },
};