import { LabelHTMLAttributes } from "react";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {};

export function Label({ children, ...rest }: LabelProps) {
  return (
    <label {...rest} className="font-bold">
      {children}
    </label>
  );
}
