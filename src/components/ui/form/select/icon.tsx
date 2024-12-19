import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

export type SelectIconProps = {
  placeholder?: string;
} & SelectPrimitive.SelectIconProps;

export function Icon({ ...rest }: SelectIconProps) {
  return (
    <SelectPrimitive.Icon {...rest}>
      <ChevronDown />
    </SelectPrimitive.Icon>
  );
}
