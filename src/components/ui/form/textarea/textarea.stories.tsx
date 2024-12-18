import { Meta, StoryObj } from "@storybook/react";

import { TextArea, TextAreaProps } from "./index";

export default {
  component: ({ ...rest }) => <TextArea {...rest} />,
  title: "Forms/TextArea",
  tags: ["autodocs"],
} as Meta<TextAreaProps>;

export const Default: StoryObj<TextAreaProps> = {};

export const Controlled: StoryObj<TextAreaProps> = {
  args: {},
};
