import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Select } from "./index";
import { SelectRootProps } from "./index";

export default {
  component: ({ ...rest }) => (
    <Select.Root {...rest}>
      <Select.Trigger placeholder="Select a item" />
      <Select.Content>
        <Select.Item value="item-1">Item 1</Select.Item>
        <Select.Item value="item-2">Item 2</Select.Item>
        <Select.Item value="item-3">Item 3</Select.Item>
        <Select.Item value="item-4">Item 4</Select.Item>
      </Select.Content>
    </Select.Root>
  ),
  title: "Forms/Select",
  tags: ["autodocs"],
} as Meta<SelectRootProps>;

export const Default: StoryObj<SelectRootProps> = {};

export const Controlled: StoryObj<SelectRootProps> = {
  args: {
    onValeuChange: action("onValueChange"),
  },
};
