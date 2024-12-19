import * as SelectPrimitive from "@radix-ui/react-select";

export type SelectGroupProps = {} & SelectPrimitive.SelectGroupProps;

export function Group({ children, ...rest }: SelectGroupProps) {
  return <SelectPrimitive.Group {...rest}>{children}</SelectPrimitive.Group>;
}
