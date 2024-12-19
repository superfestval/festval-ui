import { Meta, StoryObj } from "@storybook/react";

import { Menu } from "./index";
import { Avatar } from "@/components/ui/avatar";
import { Text } from "@/components/typograph/text";
import { Button } from "@/components/ui/form/button";
import { Bell, Settings, User } from "lucide-react";

export default {
  render: () => (
    <Menu.Root>
      <Menu.Trigger>
        <Avatar image="https://placehold.co/600x400" username="User" />
      </Menu.Trigger>

      <Menu.Portal>
        <Menu.Header>
          <Avatar image="https://placehold.co/600x400" username="User" />
          <div className="flex flex-col">
            <Text as="strong">Jhon Doe</Text>
            <Text size="xs" as="small">
              Administrador
            </Text>
          </div>
        </Menu.Header>
        <Menu.Content>
          <Menu.Item href="#" icon={User}>
            Perfil
          </Menu.Item>
          <Menu.Item href="#" icon={Bell}>
            Notificações
          </Menu.Item>
          <Menu.Item href="#" icon={Settings}>
            Configurações
          </Menu.Item>
        </Menu.Content>
        <Menu.Footer>
          <Button className="w-full">Sair</Button>
        </Menu.Footer>
      </Menu.Portal>
    </Menu.Root>
  ),
  title: "Surfaces/Menu",
  tags: ["autodocs"],
} as Meta<typeof Menu>;

export const MenuAvatar: StoryObj<typeof Menu> = {
  args: {},
};
