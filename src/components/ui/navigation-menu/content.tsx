import * as Navigation from "@radix-ui/react-navigation-menu";
import { tv, VariantProps } from "tailwind-variants";

const navigationMenuContentVariant = tv({
  base: "bg-zinc-50 mt-4 rounded h-fit",
});

export type NavigationMenuContentProps =
  {} & Navigation.NavigationMenuContentProps &
    VariantProps<typeof navigationMenuContentVariant>;

export function Content({
  children,
  className,
  ...rest
}: NavigationMenuContentProps) {
  return (
    <Navigation.Content
      {...rest}
      className={navigationMenuContentVariant({ className })}
    >
      {children}
    </Navigation.Content>
  );
}
