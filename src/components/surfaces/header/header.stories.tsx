import { Meta, StoryObj } from "@storybook/react";

import { Header } from "./index";

import Logo from "@/assets/logo-white.svg";
import { Menu } from "../menu";
import { Avatar } from "@/components/ui/avatar";
import { Text } from "@/components/typograph/text";
import { Bell, LifeBuoy, LogOut, MenuIcon, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/form/button";
import { Heading } from "@/components/typograph/heading";

export default {
  component: Header.Root,
  title: "Surfaces/Header",
  tags: ["autodocs"],
} as Meta<typeof Header>;

export const Default: StoryObj<typeof Header> = {
  render: ({ ...rest }) => (
    <Header.Root {...rest}>
      <div className="flex items-center gap-4">
        <Header.Image src={Logo} alt="Super Festval" />
        <Menu.Root>
          <Menu.Trigger>
            <MenuIcon size={24} className="text-zinc-50" />
          </Menu.Trigger>

          <Menu.Portal>
            <Menu.Header>
              <Heading>Indicações RH</Heading>
            </Menu.Header>
            <Menu.Content>
              <Menu.Item href="#" icon={User} className="rounded-t">
                Home
              </Menu.Item>
              <Menu.Item href="#" icon={Bell} className="rounded-b">
                Indicações
              </Menu.Item>
            </Menu.Content>
          </Menu.Portal>
        </Menu.Root>
      </div>

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
            <Menu.Item href="#" icon={LifeBuoy}>
              Ajuda
            </Menu.Item>
            <Button
              iconLeft={LogOut}
              className="w-full rounded-none rounded-b bg-yellow-600/25 text-yellow-800 hover:bg-yellow-600/50"
            >
              Sair
            </Button>
          </Menu.Footer>
        </Menu.Portal>
      </Menu.Root>
    </Header.Root>
  ),
};
