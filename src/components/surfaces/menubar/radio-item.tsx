import * as MenubarPrimitive from "@radix-ui/react-menubar";

export type RadioItem = {} & MenubarPrimitive.MenubarRadioItemProps;

export function RadioItem({ children, ...rest }: RadioItem) {
  return (
    <MenubarPrimitive.RadioItem {...rest}>
      {children}
    </MenubarPrimitive.RadioItem>
  );
}
