import { Meta, StoryObj } from "@storybook/react";

import { Avatar, AvatarProps } from "./index";

export default {
  component: Avatar,
  title: "Display/Avatar",
  args: {
    image: "https://placehold.co/600x400",
    username: "example",
  },
  argTypes: {
    image: {
      type: "string",
    },
    username: {
      type: "string",
    },
  },
  tags: ["autodocs"],
} as Meta<AvatarProps>;

export const Default: StoryObj<AvatarProps> = {};
Default.args = {};
