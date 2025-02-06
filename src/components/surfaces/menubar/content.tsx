import * as MenubarPrimitive from "@radix-ui/react-menubar";

export type Content = {} & MenubarPrimitive.MenubarContentProps;

export function Content({ children, ...rest }: Content) {
  return (
    <MenubarPrimitive.Content {...rest}>{children}</MenubarPrimitive.Content>
  );
}
