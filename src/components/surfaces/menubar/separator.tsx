import * as MenubarPrimitive from "@radix-ui/react-menubar";

export type Separator = {} & MenubarPrimitive.MenubarSeparatorProps;

export function Separator({ children, ...rest }: Separator) {
  return (
    <MenubarPrimitive.Separator {...rest}>
      {children}
    </MenubarPrimitive.Separator>
  );
}
