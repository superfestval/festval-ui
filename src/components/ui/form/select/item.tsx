import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon } from "lucide-react";
import { forwardRef } from "react";

export type SelectItemProps = {} & SelectPrimitive.SelectItemProps;

export const Item = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, ...rest }, ref) => (
    <SelectPrimitive.Item
      ref={ref}
      {...rest}
      className="flex cursor-pointer items-center justify-between border-b border-b-zinc-100 px-4 py-2 outline-none hover:bg-zinc-100"
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>
        <CheckIcon size={14} className="text-yellow-600" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
);
