import { HTMLAttributes } from "react";
import { SidebarProvider } from "./context/sidebar";

export type SidebarFooter = {} & HTMLAttributes<HTMLElement>;

export function Footer({ children, ...rest }: SidebarFooter) {
  return <div {...rest}>{children}</div>;
}
