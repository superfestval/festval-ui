import * as MenubarPrimitive from "@radix-ui/react-menubar";

export type Sub = {} & MenubarPrimitive.MenubarSubProps;

export function Sub({ children, ...rest }: Sub) {
  return <MenubarPrimitive.Sub {...rest}>{children}</MenubarPrimitive.Sub>;
}
