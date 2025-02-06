import { HTMLAttributes } from "react";
import { SidebarProvider } from "./context/sidebar";

export type SidebarRootProps = {} & HTMLAttributes<HTMLElement>;

export function Root({ children, ...rest }: SidebarRootProps) {
  return <SidebarProvider {...rest}>{children}</SidebarProvider>;
}
