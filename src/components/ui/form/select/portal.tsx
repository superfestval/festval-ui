import * as SelectPrimitive from "@radix-ui/react-select";

export type SelectPortalProps = {} & SelectPrimitive.SelectPortalProps;

export function Portal({ children, ...rest }: SelectPortalProps) {
  return <SelectPrimitive.Portal {...rest}>{children}</SelectPrimitive.Portal>;
}
