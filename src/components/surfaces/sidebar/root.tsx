import { HTMLAttributes } from "react";
import { SidebarProvider } from "./context/sidebar";

export type SidebarRoot = {} & HTMLAttributes<HTMLElement>;

export function Root({ children, ...rest }: SidebarRoot) {
  return <SidebarProvider {...rest}>{children}</SidebarProvider>;
}
