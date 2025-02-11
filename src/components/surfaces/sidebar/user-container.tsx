import { HTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { useSidebar } from "./context/sidebar";

const variant = tv({
  base: "flex flex-col data-[state=close]:hidden",
});

export type SidebarUserContainerProps = {} & HTMLAttributes<HTMLElement> &
  VariantProps<typeof variant>;

export function UserContainer({
  children,
  className,
  ...rest
}: SidebarUserContainerProps) {
  const { state } = useSidebar();

  return (
    <div data-state={state} className={variant({ className })}>
      {children}
    </div>
  );
}
