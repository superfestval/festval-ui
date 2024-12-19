import * as Navigation from "@radix-ui/react-navigation-menu";

export type NavigationMenuRootProps = {} & Navigation.NavigationMenuProps;

export function Root({ children, ...rest }: NavigationMenuRootProps) {
  return <Navigation.Root id="navigation">{children}</Navigation.Root>;
}
