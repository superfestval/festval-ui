import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Header } from "./index";

import { Avatar } from "@/components/ui/avatar";
import { Menu } from "@components/surfaces/menu";

import Logo from "@/assets/logo-white.svg";

export default {
  component: () => (
    <Header.Root>
      <Header.Image src={Logo} alt="Super Festval" />
      <Menu
        signOut={() => {}}
        username="example"
        avatarImage="https://placehold.co/600x400"
      >
        <Avatar username="example" image="https://placehold.co/600x400" />
      </Menu>
    </Header.Root>
  ),
  title: "Surfaces/Header",
} as Meta<typeof Header>;

export const Default: StoryObj<typeof Header> = {};
