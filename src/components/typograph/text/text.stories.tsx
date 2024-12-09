import { Meta, StoryObj } from "@storybook/react";

import { Text, TextProps } from "./index";

export default {
  component: Text,
  title: "Typograph/Text",
  args: {
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Ducimus quo maxime voluptatibus unde ut nobis error, distinctio 
      asperiores dolorum. Quia aut sunt sapiente odit porro fugit voluptatum 
      iure recusandae perferendis!`,
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
      options: ["p", "strong", "span"],
    },
  },
  tags: ["autodocs"],
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {
  args: {
    size: "md",
    as: "strong",
  },
};

export const As: StoryObj<TextProps> = {
  args: {
    as: "strong",
  },
};
