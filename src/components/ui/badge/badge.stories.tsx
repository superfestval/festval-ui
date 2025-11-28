import { Meta, StoryObj } from "@storybook/react";

import { Badge, BadgeProps } from "./index";

export default {
  render: () => <Badge>Badge</Badge>,
  title: "Display/Badge",
  tags: ["autodocs"],
} as Meta<BadgeProps>;

export const Default: StoryObj<BadgeProps> = {};

Default.args = {};
