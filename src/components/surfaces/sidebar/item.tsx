import { HTMLAttributes } from "react";

export type SidebarItem = {} & HTMLAttributes<HTMLElement>;

export function Item({ children, ...rest }: SidebarItem) {
  return <div {...rest}>{children}</div>;
}
