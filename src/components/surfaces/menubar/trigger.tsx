import * as MenubarPrimitive from "@radix-ui/react-menubar";

export type Trigger = {} & MenubarPrimitive.MenubarTriggerProps;

export function Trigger({ children, ...rest }: Trigger) {
  return (
    <MenubarPrimitive.Trigger {...rest}>{children}</MenubarPrimitive.Trigger>
  );
}
