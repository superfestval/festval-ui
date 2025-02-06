import { HTMLAttributes } from "react";

export type SidebarContentProps = {} & HTMLAttributes<HTMLElement>;

export function Content({ children, ...rest }: SidebarContentProps) {
  return (
    <div {...rest} className="w-full">
      {children}
    </div>
  );
}
