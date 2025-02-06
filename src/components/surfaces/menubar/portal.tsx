import * as MenubarPrimitive from "@radix-ui/react-menubar";

export type Portal = {} & MenubarPrimitive.MenubarPortalProps;

export function Portal({ children, ...rest }: Portal) {
  return (
    <MenubarPrimitive.Portal {...rest}>{children}</MenubarPrimitive.Portal>
  );
}
