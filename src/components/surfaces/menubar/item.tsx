import * as MenubarPrimitive from "@radix-ui/react-menubar";

export type Item = {} & MenubarPrimitive.MenubarItemProps;

export function Item({ children, ...rest }: Item) {
  return <MenubarPrimitive.Item {...rest}>{children}</MenubarPrimitive.Item>;
}
