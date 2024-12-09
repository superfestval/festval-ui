import { ElementType, HTMLAttributes } from "react";
import { SelectProvider, useSelect } from "../context";
import { useSelectContext } from "../context/hooks/useSelectContext";

export interface SelectRootProps extends HTMLAttributes<ElementType> {
  onValeuChange?: (value: string) => void;
}

export const Root = ({ children, onValeuChange }: SelectRootProps) => {
  return (
    <SelectProvider onChange={onValeuChange}>
      <div className="relative">{children}</div>
    </SelectProvider>
  );
};
