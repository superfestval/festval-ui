import { HTMLAttributes } from "react";

import { useSidebar } from "./context/sidebar";
import { tv } from "tailwind-variants";

const sidebarVariant = tv({
  base: "parent group h-full w-full max-w-60 grid-rows-[auto,1fr,auto] gap-4 rounded border border-zinc-200 bg-zinc-50 data-[state=close]:max-w-24 hidden md:grid",
});

export type SidebarContainerProps = {} & HTMLAttributes<HTMLElement>;

export function Container({
  children,
  className,
  ...rest
}: SidebarContainerProps) {
  const { state } = useSidebar();

  return (
    <div {...rest} data-state={state} className={sidebarVariant({ className })}>
      {children}
    </div>
  );
}
