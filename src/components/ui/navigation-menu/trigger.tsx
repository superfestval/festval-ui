import * as Navigation from "@radix-ui/react-navigation-menu";
import { tv, VariantProps } from "tailwind-variants";

const navigationMenuContentVariant = tv({
  base: "bg-zinc-200 flex gap-4 items-center p-2 rounded",
});

export type NavigationMenuTriggerProps =
  {} & Navigation.NavigationMenuTriggerProps &
    VariantProps<typeof navigationMenuContentVariant>;

export function Trigger({
  children,
  className,
  ...rest
}: NavigationMenuTriggerProps) {
  return (
    <Navigation.Trigger
      {...rest}
      className={navigationMenuContentVariant({ className })}
    >
      {children}
    </Navigation.Trigger>
  );
}
