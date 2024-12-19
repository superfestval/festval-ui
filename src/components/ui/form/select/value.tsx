import * as SelectPrimitive from "@radix-ui/react-select";

export type SelectValueProps = {} & SelectPrimitive.SelectValueProps;

export function Value({ ...rest }: SelectValueProps) {
  return <SelectPrimitive.Value {...rest} />;
}
