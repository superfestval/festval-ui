import { Meta, StoryObj } from "@storybook/react";

import { Popover, PopoverRootProps } from "./index";
import { Avatar } from "@/components/ui/avatar";
import { X } from "lucide-react";

export default {
  component: Popover.Root,
  title: "Surfaces/Popover",
  tags: ["autodocs"],
  render: ({ children, ...rest }) => (
    <Popover.Root {...rest}>
      <Popover.Trigger>
        <Avatar image="https://placehold.co/600x400" username="User" />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          <Popover.Close>
            <X />
          </Popover.Close>
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  ),
} as Meta<PopoverRootProps>;

export const Default: StoryObj<PopoverRootProps> = {
  args: {},
};

export const Secondary: StoryObj<PopoverRootProps> = {
  args: {},
};
