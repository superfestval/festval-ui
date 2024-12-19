import * as SelectPrimitive from "@radix-ui/react-select";

export type SelectLabelProps = {} & SelectPrimitive.SelectLabelProps;

export function Label({ children, ...rest }: SelectLabelProps) {
  return (
    <SelectPrimitive.Label {...rest} className="mt-4 text-center text-zinc-500">
      {children}
    </SelectPrimitive.Label>
  );
}
