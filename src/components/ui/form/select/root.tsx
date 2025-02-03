import * as SelectPrimitive from "@radix-ui/react-select";

export type SelectRootProps = {
  error?: string;
} & SelectPrimitive.SelectProps;

export function Root({ children, error, ...rest }: SelectRootProps) {
  return (
    <SelectPrimitive.Root {...rest}>
      {children}
      {error && <small className="mt-1 text-xs text-rose-600">{error}</small>}
    </SelectPrimitive.Root>
  );
}
