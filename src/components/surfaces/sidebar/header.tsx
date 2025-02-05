import { HTMLAttributes } from "react";
import { SidebarProvider } from "./context/sidebar";

export type SidebarHeader = {} & HTMLAttributes<HTMLElement>;

export function Header({ children, ...rest }: SidebarHeader) {
  return <div {...rest}>{children}</div>;
}
