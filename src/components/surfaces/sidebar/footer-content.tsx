import { HTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";

const variant = tv({
  base: "flex items-center gap-2 rounded-b border-t border-t-zinc-200 bg-zinc-50 p-4",
});

export type SidebarFooterContentProps = {} & HTMLAttributes<HTMLElement> &
  VariantProps<typeof variant>;

export function FooterContent({
  children,
  className,
  ...rest
}: SidebarFooterContentProps) {
  return (
    <div className={variant({ className })} {...rest}>
      {children}
    </div>
  );
}
