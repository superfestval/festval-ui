import * as MenubarPrimitive from "@radix-ui/react-menubar";

export type SubContent = {} & MenubarPrimitive.MenubarSubContentProps;

export function SubContent({ children, ...rest }: SubContent) {
  return (
    <MenubarPrimitive.SubContent {...rest}>
      {children}
    </MenubarPrimitive.SubContent>
  );
}
