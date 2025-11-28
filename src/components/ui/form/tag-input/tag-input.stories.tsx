import { Meta, StoryObj } from "@storybook/react";

import { TagInput, TagInputProps } from "./index";

export default {
  component: TagInput,
  title: "Forms/TagInput",
  args: {
    label: "Insira uma nova tag",
  },
  argTypes: {
    label: {
      type: "string",
    },
  },
  tags: ["autodocs"],
} as Meta<TagInputProps>;

export const Default: StoryObj<TagInputProps> = {};

Default.args = {};
