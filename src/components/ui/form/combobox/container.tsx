import { HTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { useComboBox } from "./root";

const variant = tv({
  base: "absolute z-[999] bg-white w-full border border-gray-200 rounded max-h-60 overflow-auto shadow-lg",
  variants: {
    isOpen: {
      true: "block",
      false: "hidden",
    },
  },
});

export type ContainerProps = {} & HTMLAttributes<HTMLElement> &
  VariantProps<typeof variant>;

export function Container({ children, className }: ContainerProps) {
  const { isOpen } = useComboBox();
  return <div className={variant({ className, isOpen })}>{children}</div>;
}
