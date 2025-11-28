import { Meta, StoryObj } from "@storybook/react";

import { ComboBox } from "./index";
import { ComboBoxRootProps } from "./root";

export default {
  render: () => (
    <ComboBox.Root placeholder="selecione uma opção">
      <ComboBox.Trigger />
      <ComboBox.Portal>
        <ComboBox.Container>
          <ComboBox.Search />
          <ComboBox.Content>
            <ComboBox.Item label="Item 1" value="item-1" />
            <ComboBox.Item label="Item 2" value="item-2" />
            <ComboBox.Item label="Item 3" value="item-3" />
          </ComboBox.Content>
        </ComboBox.Container>
      </ComboBox.Portal>
    </ComboBox.Root>
  ),
  title: "Forms/ComboBox",
  args: {},
  argTypes: {},
  tags: ["autodocs"],
} as Meta<ComboBoxRootProps>;

export const Default: StoryObj<ComboBoxRootProps> = {};

Default.args = {};
