import * as MenubarPrimitive from "@radix-ui/react-menubar";

export type CheckboxItem = {} & MenubarPrimitive.MenubarCheckboxItemProps;

export function CheckboxItem({ children, ...rest }: CheckboxItem) {
  return (
    <MenubarPrimitive.CheckboxItem {...rest}>
      {children}
    </MenubarPrimitive.CheckboxItem>
  );
}
