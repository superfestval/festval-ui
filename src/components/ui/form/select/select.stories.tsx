import { Meta, StoryObj } from "@storybook/react";

import { Select, SelectRootProps } from "./index";

export default {
  component: ({ ...rest }) => (
    <Select.Root placeholder="Select..." {...rest}>
      <Select.Option value="first_item">First item</Select.Option>
      <Select.Option value="second_item">Second item</Select.Option>
      <Select.Option value="third_item">Third item</Select.Option>
    </Select.Root>
  ),
  title: "Forms/Select",
  argTypes: {},
} as Meta<SelectRootProps>;

export const Default: StoryObj = {};
