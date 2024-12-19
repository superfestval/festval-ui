import * as SelectPrimitive from "@radix-ui/react-select";

export type SelectContentProps = {} & SelectPrimitive.SelectContentProps;

export function Content({ children, ...rest }: SelectContentProps) {
  return (
    <SelectPrimitive.Content {...rest} className="rounded bg-zinc-50">
      {children}
    </SelectPrimitive.Content>
  );
}
