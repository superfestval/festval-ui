import * as MenubarPrimitive from "@radix-ui/react-menubar";

export type Root = {} & MenubarPrimitive.MenubarProps;

export function Root({ children, ...rest }: Root) {
  return (
    <MenubarPrimitive.Root
      className="flex w-fit gap-2 rounded-md bg-white p-1"
      {...rest}
    >
      {children}
    </MenubarPrimitive.Root>
  );
}
