import * as MenubarPrimitive from "@radix-ui/react-menubar";

export type Arrow = {} & MenubarPrimitive.MenubarArrowProps;

export function Arrow({ children, ...rest }: Arrow) {
  return <MenubarPrimitive.Arrow {...rest}>{children}</MenubarPrimitive.Arrow>;
}
