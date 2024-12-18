import { Meta, StoryObj } from "@storybook/react";

import { AlertDialog, AlertDialogRootProps } from "./index";
import { Button } from "../form/button";

export default {
  component: AlertDialog.Root,
  title: "Display/AlertDialog",
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button variant="destructive">Deletar Conta</Button>
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay />
        <AlertDialog.Content>
          <AlertDialog.Title>Atenção</AlertDialog.Title>
          <AlertDialog.Description>
            Deseja realmente excluir sua conta?
          </AlertDialog.Description>
          <div className="mt-8 flex justify-end gap-4">
            <AlertDialog.Cancel asChild>
              <Button variant="ghost">Cancelar</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button variant="destructive">Deletar</Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  ),
  args: {},
  argTypes: {},
  tags: ["autodocs"],
} as Meta<AlertDialogRootProps>;

export const Default: StoryObj<AlertDialogRootProps> = {};
Default.args = {};
