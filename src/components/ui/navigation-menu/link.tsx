import * as Navigation from "@radix-ui/react-navigation-menu";

export type NavigationMenuLinkProps = {} & Navigation.NavigationMenuLinkProps;

export function Link({ children, ...rest }: NavigationMenuLinkProps) {
  return <Navigation.Link {...rest}>{children}</Navigation.Link>;
}
