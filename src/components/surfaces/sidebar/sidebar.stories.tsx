import { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from ".";
import {
  LayoutDashboard,
  LifeBuoy,
  MessageCircle,
  Settings,
  Sticker,
  Ticket,
} from "lucide-react";
import { Menu } from "../menu";

export default {
  render: () => (
    <div className="h-screen">
      <Sidebar.Root>
        <Sidebar.Container>
          <Sidebar.Header>
            <Sidebar.Title>Menu</Sidebar.Title>
            <Sidebar.Icon />
          </Sidebar.Header>
          <Sidebar.Content>
            <Sidebar.Item icon={LayoutDashboard}>Dashboard</Sidebar.Item>
            <Menu.Root>
              <Menu.Trigger>
                <Sidebar.Item icon={MessageCircle}>Chats</Sidebar.Item>
              </Menu.Trigger>
              <Menu.Portal>
                <Menu.Content>
                  <Menu.Item>
                    <Sidebar.Item icon={MessageCircle}>Novo</Sidebar.Item>
                  </Menu.Item>
                </Menu.Content>
              </Menu.Portal>
            </Menu.Root>
            <Sidebar.Item icon={Ticket}>Tickets</Sidebar.Item>
            <Sidebar.Item icon={Sticker}>Feedbacks</Sidebar.Item>
          </Sidebar.Content>
          <Sidebar.Footer
            user={{
              name: "Jhon Doe",
              image: "https://placehold.jp/150x150.png",
              role: "Administrador",
            }}
          >
            <Sidebar.Item icon={Settings}>Configuraçoes</Sidebar.Item>
            <Sidebar.Item icon={LifeBuoy}>Ajuda</Sidebar.Item>
          </Sidebar.Footer>
        </Sidebar.Container>
      </Sidebar.Root>
    </div>
  ),
  title: "Surfaces/Sidebar",
  tags: ["autodocs"],
} as Meta<typeof Sidebar>;

export const SidebarDefault: StoryObj = {};

