import * as MenubarPrimitive from "@radix-ui/react-menubar";

export type Root = {} & MenubarPrimitive.MenubarProps;

export function Root({ children, ...rest }: Root) {
  return <MenubarPrimitive.Root {...rest}>{children}</MenubarPrimitive.Root>;
}
