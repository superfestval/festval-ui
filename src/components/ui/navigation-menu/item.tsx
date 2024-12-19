import * as Navigation from "@radix-ui/react-navigation-menu";
import { forwardRef } from "react";

export type NavigationMenuItemProps = {} & Navigation.NavigationMenuItemProps;

export const Item = forwardRef(
  ({ children, ...rest }: NavigationMenuItemProps) => {
    return <Navigation.Item {...rest}>{children}</Navigation.Item>;
  }
);
