import * as MenubarPrimitive from "@radix-ui/react-menubar";

export type Group = {} & MenubarPrimitive.MenubarGroupProps;

export function Group({ children, ...rest }: Group) {
  return <MenubarPrimitive.Group {...rest}>{children}</MenubarPrimitive.Group>;
}
