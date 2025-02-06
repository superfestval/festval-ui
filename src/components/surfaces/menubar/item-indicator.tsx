import * as MenubarPrimitive from "@radix-ui/react-menubar";

export type ItemIndicator = {} & MenubarPrimitive.MenubarItemIndicatorProps;

export function ItemIndicator({ children, ...rest }: ItemIndicator) {
  return (
    <MenubarPrimitive.ItemIndicator {...rest}>
      {children}
    </MenubarPrimitive.ItemIndicator>
  );
}
