import * as Navigation from "@radix-ui/react-navigation-menu";

export type NavigationMenuListProps = {} & Navigation.NavigationMenuListProps;

export function List({ children, ...rest }: NavigationMenuListProps) {
  return <Navigation.List id="navigation">{children}</Navigation.List>;
}
