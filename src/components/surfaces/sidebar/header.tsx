import { HTMLAttributes } from "react";
import { SidebarProvider } from "./context/sidebar";

export type SidebarHeader = {} & HTMLAttributes<HTMLElement>;

export function Header({ children, ...rest }: SidebarHeader) {
  return (
    <div
      className="w-fit rounded-t border-b border-b-zinc-200 bg-zinc-50 p-4"
      {...rest}
    >
      {children}
    </div>
  );
}
