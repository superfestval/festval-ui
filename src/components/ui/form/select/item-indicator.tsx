import * as SelectPrimitive from "@radix-ui/react-select";

export type SelectItemIndicatorProps = {} & SelectPrimitive.SelectItemProps;

export function ItemIndicator({ children, ...rest }: SelectItemIndicatorProps) {
  return (
    <SelectPrimitive.ItemIndicator {...rest}>
      {children}
    </SelectPrimitive.ItemIndicator>
  );
}
