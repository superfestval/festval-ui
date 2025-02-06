import { Meta, StoryObj } from "@storybook/react";
import { Menubar } from ".";
import { Button } from "@/components/ui/form/button";

export default {
  render: ({ ...args }) => (
    <Menubar.Root {...args}>
      <Menubar.Menu>
        <Menubar.Trigger asChild>
          <Button>Menu</Button>
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content>
            <Menubar.Label />
            <Menubar.Item />
            <Menubar.Group>
              <Menubar.Item />
            </Menubar.Group>

            <Menubar.CheckboxItem>
              <Menubar.ItemIndicator />
            </Menubar.CheckboxItem>

            <Menubar.RadioGroup>
              <Menubar.RadioItem value="">
                <Menubar.ItemIndicator />
              </Menubar.RadioItem>
            </Menubar.RadioGroup>

            <Menubar.Sub>
              <Menubar.SubTrigger />
              <Menubar.Portal>
                <Menubar.SubContent />
              </Menubar.Portal>
            </Menubar.Sub>
            <Menubar.Separator />
            <Menubar.Arrow />
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
