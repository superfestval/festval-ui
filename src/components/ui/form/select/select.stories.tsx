import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Select, SelectRootProps } from "./index";

export default {
  render: ({ ...rest }) => (
    <Select.Root {...rest} defaultValue="item-1">
      <Select.Trigger>
        <Select.Value placeholder="Selecione um item" />
        <Select.Icon />
      </Select.Trigger>
      <Select.Content>
        <Select.Viewport>
          <Select.Group>
            <Select.Label>Items</Select.Label>
            <Select.Item value="item-1">Item 1</Select.Item>
            <Select.Item value="item-2">Item 2</Select.Item>
            <Select.Item value="item-3">Item 3</Select.Item>
            <Select.Item value="item-4">Item 4</Select.Item>
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  ),
  title: "Forms/Select",
  tags: ["autodocs"],
} as Meta<SelectRootProps>;

export const Default: StoryObj<SelectRootProps> = {};

export const Controlled: StoryObj<SelectRootProps> = {
  args: {
    onValueChange: action("onValueChange"),
  },
};
