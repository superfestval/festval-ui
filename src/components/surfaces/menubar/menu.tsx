import * as MenubarPrimitive from "@radix-ui/react-menubar";

export type Menu = {} & MenubarPrimitive.MenubarMenuProps;

export function Menu({ children, ...rest }: Menu) {
  return <MenubarPrimitive.Menu {...rest}>{children}</MenubarPrimitive.Menu>;
}
