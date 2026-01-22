import { Meta, StoryObj } from "@storybook/react";

import { Badge, BadgeProps } from "./index";

export default {
  render: ({ ...rest }) => <Badge {...rest}>Badge</Badge>,
  title: "Display/Badge",
  tags: ["autodocs"],
} as Meta<BadgeProps>;

export const Default: StoryObj<BadgeProps> = {
  args: {
    variant: "default",
  },
};

export const Success: StoryObj<BadgeProps> = {
  args: {
    variant: "success",
  },
};

export const Warning: StoryObj<BadgeProps> = {
  args: {
    variant: "warning",
  },
};

export const Danger: StoryObj<BadgeProps> = {
  args: {
    variant: "danger",
  },
};

export const Info: StoryObj<BadgeProps> = {
  args: {
    variant: "info",
  },
};