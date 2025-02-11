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
import { Tooltip } from "@/components/ui/tooltip";
import { Avatar } from "@/components/ui/avatar";
import { Text } from "@/components/typograph/text";

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
            <Tooltip value="Dashboard">
              <Sidebar.Item icon={LayoutDashboard}>Dashboard</Sidebar.Item>
            </Tooltip>
            <Sidebar.Item icon={MessageCircle}>Chats</Sidebar.Item>
            <Sidebar.Item icon={Ticket}>Tickets</Sidebar.Item>
            <Sidebar.Item icon={Sticker}>Feedbacks</Sidebar.Item>
          </Sidebar.Content>
          <Sidebar.Footer>
            <Sidebar.Item icon={Settings}>Configuraçoes</Sidebar.Item>
            <Sidebar.Item icon={LifeBuoy}>Ajuda</Sidebar.Item>
            <Sidebar.FooterContent>
              <Avatar
                username="Jhon Doe"
                image="https://placehold.jp/150x150.png"
              />
              <Sidebar.UserContainer>
                <Text as="strong">Jhon Doe</Text>
                <Text size="sm" className="text-zinc-400">
                  Administrator
                </Text>
              </Sidebar.UserContainer>
            </Sidebar.FooterContent>
          </Sidebar.Footer>
        </Sidebar.Container>
      </Sidebar.Root>
    </div>
  ),
  title: "Surfaces/Sidebar",
  tags: ["autodocs"],
} as Meta<typeof Sidebar>;

export const SidebarDefault: StoryObj<typeof Sidebar> = {};

