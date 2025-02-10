import * as MenubarPrimitive from "@radix-ui/react-menubar";

export type Item = {} & MenubarPrimitive.MenubarItemProps;

export function Item({ children, ...rest }: Item) {
  return (
    <MenubarPrimitive.Item
      {...rest}
      className="p-2 outline-none hover:bg-zinc-200"
    >
      {children}
    </MenubarPrimitive.Item>
  );
}
