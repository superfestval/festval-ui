import { HTMLAttributes } from "react";
import { useSidebar } from "./context/sidebar";

export type SidebarHeaderProps = {} & HTMLAttributes<HTMLElement>;

export function Header({ children, ...rest }: SidebarHeaderProps) {
  const { state } = useSidebar();
  return (
    <div
      {...rest}
      data-state={state}
      className="flex h-16 w-full items-center justify-between rounded-t border-b border-b-zinc-200 p-4 data-[state=close]:max-w-24 data-[state=close]:justify-center"
    >
      {children}
    </div>
  );
}
