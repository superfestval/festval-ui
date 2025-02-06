import * as MenubarPrimitive from "@radix-ui/react-menubar";

export type Label = {} & MenubarPrimitive.MenubarLabelProps;

export function Label({ children, ...rest }: Label) {
  return <MenubarPrimitive.Label {...rest}>{children}</MenubarPrimitive.Label>;
}
