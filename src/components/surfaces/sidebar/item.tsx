import { ElementType, HTMLAttributes } from "react";

export type SidebarItem = {
  icon?: ElementType;
} & HTMLAttributes<HTMLElement>;

export function Item({ children, icon, ...rest }: SidebarItem) {
  const Icon = icon;

  return (
    <button className="w-full" {...rest}>
      {Icon && <Icon />}
      {children}
    </button>
  );
}
