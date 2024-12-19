import * as SelectPrimitive from "@radix-ui/react-select";

export type SelectItemTextProps = {} & SelectPrimitive.SelectItemTextProps;

export function ItemText({ children, ...rest }: SelectItemTextProps) {
  return (
    <SelectPrimitive.ItemText {...rest}>{children}</SelectPrimitive.ItemText>
  );
}
