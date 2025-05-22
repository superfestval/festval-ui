import * as Navigation from "@radix-ui/react-navigation-menu";

export type NavigationMenuItemProps = {} & Navigation.NavigationMenuItemProps;

export const Item = ({ children, ...rest }: NavigationMenuItemProps) => (
  <Navigation.Item {...rest}>{children}</Navigation.Item>
);
