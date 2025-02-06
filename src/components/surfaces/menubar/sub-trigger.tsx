import * as MenubarPrimitive from "@radix-ui/react-menubar";

export type SubTrigger = {} & MenubarPrimitive.MenubarSubTriggerProps;

export function SubTrigger({ children, ...rest }: SubTrigger) {
  return (
    <MenubarPrimitive.SubTrigger {...rest}>
      {children}
    </MenubarPrimitive.SubTrigger>
  );
}
