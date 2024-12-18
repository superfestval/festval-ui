import { Meta, StoryObj } from "@storybook/react";

import { Dialog, DialogRootProps } from "./index";

import { Button } from "../form/button";
import { Input } from "../form/input";
import { Label } from "../form/label";

export default {
  component: Dialog.Root,
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Edit Profile</Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Container>
          <Dialog.Header>
            <Dialog.Title>Edit Profile</Dialog.Title>
            <Dialog.Description>
              Make changes to your profile here. Click save when you're done.
            </Dialog.Description>
          </Dialog.Header>
          <Dialog.Content>
            <Label htmlFor="name">Name</Label>
            <Input name="name" className="mb-4" />

            <Label htmlFor="name">Email</Label>
            <Input name="name" />
          </Dialog.Content>
          <Dialog.Footer>
            <Button>Enviar</Button>
            <Dialog.Close asChild>
              <Button variant="ghost">Cancelar</Button>
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.Container>
      </Dialog.Portal>
    </Dialog.Root>
  ),
  title: "Display/Dialog",
  args: {},
  argTypes: {},
  tags: ["autodocs"],
} as Meta<DialogRootProps>;

export const Default: StoryObj<DialogRootProps> = {};
Default.args = {};
