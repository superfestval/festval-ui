import { LabelHTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";

const labelVariant = tv({
  base: "font-bold text-zinc-600",
});

export type LabelProps =
  LabelHTMLAttributes<HTMLLabelElement> & {} & VariantProps<
      typeof labelVariant
    >;

export function Label({ children, className, ...rest }: LabelProps) {
  return (
    <label {...rest} className={labelVariant({ className })}>
      {children}
    </label>
  );
}
