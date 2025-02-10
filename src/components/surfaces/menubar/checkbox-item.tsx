import * as MenubarPrimitive from "@radix-ui/react-menubar";

export type CheckboxItem = {} & MenubarPrimitive.MenubarCheckboxItemProps;

export function CheckboxItem({ children, ...rest }: CheckboxItem) {
  return (
    <MenubarPrimitive.CheckboxItem
      className="text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 relative flex h-[25px] select-none items-center rounded px-2.5 pl-5 text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br"
      {...rest}
    >
      {children}
    </MenubarPrimitive.CheckboxItem>
  );
}
