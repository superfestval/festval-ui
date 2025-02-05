import { HTMLAttributes } from "react";
import { SidebarProvider } from "./context/sidebar";

export type SidebarContent = {} & HTMLAttributes<HTMLElement>;

export function Content({ children, ...rest }: SidebarContent) {
  return <div {...rest}>{children}</div>;
}
