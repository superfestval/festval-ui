import { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./index";
import {
  LayoutDashboard,
  LifeBuoy,
  MessageCircle,
  Settings,
  Sticker,
  Ticket,
} from "lucide-react";

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
            <Sidebar.Item icon={MessageCircle}>Chats</Sidebar.Item>
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

