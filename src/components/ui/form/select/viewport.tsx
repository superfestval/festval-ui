import * as SelectPrimitive from "@radix-ui/react-select";

export type SelectViewportProps = {} & SelectPrimitive.SelectViewportProps;

export function Viewport({ children, ...rest }: SelectViewportProps) {
  return (
    <SelectPrimitive.Viewport {...rest}>{children}</SelectPrimitive.Viewport>
  );
}
