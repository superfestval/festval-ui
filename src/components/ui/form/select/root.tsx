import * as SelectPrimitive from "@radix-ui/react-select";

export type SelectRootProps = {} & SelectPrimitive.SelectProps;

export function Root({ children, ...rest }: SelectRootProps) {
  return <SelectPrimitive.Root {...rest}>{children}</SelectPrimitive.Root>;
}
