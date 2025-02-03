import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Select, SelectRootProps } from "./index";

export default {
  render: ({ ...rest }) => (
    <Select.Root {...rest} defaultValue="item-1">
      <Select.Trigger>
        <Select.Value placeholder="Selecione" />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content>
          <Select.Viewport>
            <Select.Group>
              <Select.Label>Items</Select.Label>
              {Array.from({ length: 5 }).map((item, index) => (
                <Select.Item value={index.toString()}>
                  Item - {index}
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
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

export const HasError: StoryObj<SelectRootProps> = {
  args: {
    error: "Any error here",
  },
};
