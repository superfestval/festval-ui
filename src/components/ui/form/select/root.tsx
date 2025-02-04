import * as SelectPrimitive from "@radix-ui/react-select";

export type SelectRootProps = {
  error?: string;
} & SelectPrimitive.SelectProps;

export function Root({
  children,
  error,
  defaultValue,
  ...rest
}: SelectRootProps) {
  return (
    <SelectPrimitive.Root {...rest} defaultValue={defaultValue}>
      {children}
      {error && <small className="mt-1 text-xs text-rose-600">{error}</small>}
    </SelectPrimitive.Root>
  );
}
