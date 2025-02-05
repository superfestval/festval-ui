import { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from ".";

export default {
  render: () => (
    <Sidebar.Root>
      <Sidebar.Header>
        <Sidebar.Title>Menu</Sidebar.Title>
      </Sidebar.Header>
      <Sidebar.Content>
        <Sidebar.Item>Teste</Sidebar.Item>
        <Sidebar.Item>Teste</Sidebar.Item>
        <Sidebar.Item>Teste</Sidebar.Item>
      </Sidebar.Content>
      <Sidebar.Footer>
        <Sidebar.Item>Teste</Sidebar.Item>
        <Sidebar.Item>Teste</Sidebar.Item>
      </Sidebar.Footer>
    </Sidebar.Root>
  ),
  title: "Surfaces/Sidebar",
  tags: ["autodocs"],
} as Meta;

export const SidebarOpen: StoryObj = {
  args: {},
};
