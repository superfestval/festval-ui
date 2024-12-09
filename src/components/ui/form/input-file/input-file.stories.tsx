import { Meta, StoryObj } from "@storybook/react";

import { InputFile, InputFileProps } from "./index";

export default {
  component: InputFile,
  renderer: ({ ...rest }) => <InputFile {...rest} />,
  title: "Forms/InputFile",
  tags: ["autodocs"],
  argTypes: {
    accept: {
      type: "string",
    },
  },
} as Meta<InputFileProps>;

export const Default: StoryObj = {
  args: {
    multiple: true,
  },
};
