import { Meta, StoryObj } from "@storybook/react";

import { Heading, HeadingProps } from "./index";

export default {
  component: Heading,
  title: "Typograph/Heading",
  args: {
    children: "Custom text",
  },
  argTypes: {
    children: {
      type: "string",
    },
    size: {
      control: {
        type: "inline-radio",
        labels: false,
      },
      options: ["xs", "sm", "md", "lg", "xlg", "2xl", "4xl"],
    },
    as: {
      type: "string",
      control: {
        type: "select",
      },
      options: ["h1", "h2", "h3", "h4"],
    },
  },
  tags: ["autodocs"],
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {
  args: {
    size: "4xl",
    children: "Title",
    as: "h1"
  },
};
