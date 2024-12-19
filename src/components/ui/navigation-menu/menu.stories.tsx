import { Meta, StoryObj } from "@storybook/react";
import { CaretDownIcon } from "@radix-ui/react-icons";

import { NavigationMenu, NavigationMenuRootProps } from "./index";

export default {
  component: NavigationMenu.Root,
  title: "Surfaces/NavigationMenu",
  tags: ["autodocs"],
} as Meta<NavigationMenuRootProps>;

export const Default: StoryObj<NavigationMenuRootProps> = {
  render: ({ ...rest }) => (
    <NavigationMenu.Root {...rest}>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>
            Customers
            <CaretDownIcon
              className="text-violet10 relative top-px transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <ul className="full p-4">
              <li className="w-full rounded p-4 hover:bg-zinc-100">
                <NavigationMenu.Link asChild>
                  <a href="#">Create</a>
                </NavigationMenu.Link>
              </li>
              <li className="w-full rounded p-4 hover:bg-zinc-100">
                <a href="#">Update</a>
              </li>
              <li className="w-full rounded p-4 hover:bg-zinc-100">
                <a href="#">Delete</a>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  ),
};
