import { Meta, StoryObj } from "@storybook/react";
import { Menubar } from ".";
import { Button } from "@/components/ui/form/button";

export default {
  render: ({ ...args }) => (
    <Menubar.Root {...args}>
      <Menubar.Menu>
        <Menubar.Trigger>
          <Button variant="ghost">Dashboard</Button>
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content sideOffset={5} alignOffset={-14} align="end">
            <Menubar.Group>
              <Menubar.Item>Item</Menubar.Item>
              <Menubar.Item>Item</Menubar.Item>
              <Menubar.Item>Item</Menubar.Item>
            </Menubar.Group>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger>
          <Button variant="ghost">Menu</Button>
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content>
            <Menubar.Sub>
              <Menubar.SubTrigger>
                <Button variant="ghost" className="w-full">
                  Sub
                </Button>
              </Menubar.SubTrigger>
              <Menubar.SubContent>
                <Menubar.Group>
                  <Menubar.Item>Item</Menubar.Item>
                  <Menubar.Item>Item</Menubar.Item>
                  <Menubar.Item>Item</Menubar.Item>
                </Menubar.Group>
              </Menubar.SubContent>
            </Menubar.Sub>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  ),
  title: "Surfaces/Menubar",
  tags: ["autodocs"],
} as Meta<typeof Menubar>;

export const Default: StoryObj<typeof Menubar> = {
  args: {},
  argTypes: {},
};
