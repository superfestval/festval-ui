import { Meta, StoryObj } from "@storybook/react";

import { FileUploader, FileUploadProps } from "./index";

export default {
  component: FileUploader,
  title: "Forms/FileUploader",
  args: {},
  argTypes: {},
  tags: ["autodocs"],
} as Meta<FileUploadProps>;

export const Default: StoryObj<FileUploadProps> = {};

Default.args = {};
