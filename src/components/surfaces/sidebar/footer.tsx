import { HTMLAttributes } from "react";

import { useSidebar } from "./context/sidebar";

export type User = {
  name: string;
  image: string;
  role: string;
};

export type SidebarFooterProps = {} & HTMLAttributes<HTMLElement>;

export function Footer({ children, ...rest }: SidebarFooterProps) {
  const { state } = useSidebar();

  return (
    <div
      {...rest}
      data-state={state}
      className="w-full rounded-b data-[state=close]:max-w-24"
    >
      {children}
    </div>
  );
}
