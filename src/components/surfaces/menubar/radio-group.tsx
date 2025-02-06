import * as MenubarPrimitive from "@radix-ui/react-menubar";

export type RadioGroup = {} & MenubarPrimitive.MenubarRadioGroupProps;

export function RadioGroup({ children, ...rest }: RadioGroup) {
  return (
    <MenubarPrimitive.RadioGroup {...rest}>
      {children}
    </MenubarPrimitive.RadioGroup>
  );
}
