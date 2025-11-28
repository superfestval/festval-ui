import { Meta, StoryObj } from "@storybook/react";

import { RootProps, TreeView } from "./index";

export default {
  render: () => (
    <TreeView.Root>
      <TreeView.Trigger>
        <p>Pasta</p>
      </TreeView.Trigger>
      <TreeView.Portal>
        <TreeView.Item onNavigate={() => console.log("Teste")}>
          <p>Arquivo</p>
        </TreeView.Item>
      </TreeView.Portal>
    </TreeView.Root>
  ),
  title: "Display/TreeView",
  args: {},
  argTypes: {},
  tags: ["autodocs"],
} as Meta<RootProps>;

export const Default: StoryObj<RootProps> = {};

Default.args = {};
