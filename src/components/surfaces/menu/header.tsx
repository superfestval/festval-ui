import { HTMLAttributes } from "react";
import { tv } from "tailwind-variants";

const menuHeaderVariant = tv({
  base: "p-4 flex gap-4 items-center border-b border-b-zinc-200 rounded-t bg-zinc-50",
});

export type MenuHeaderProps = {} & HTMLAttributes<HTMLElement>;

export function Header({ children, className, ...rest }: MenuHeaderProps) {
  return (
    <div className={menuHeaderVariant({ className })} {...rest}>
      {children}
    </div>
  );
}
