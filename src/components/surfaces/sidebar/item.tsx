import { tv } from "tailwind-variants";
import {
  cloneElement,
  ElementType,
  HTMLAttributes,
  isValidElement,
} from "react";

import { Text } from "@/components/typograph/text";

import { useSidebar } from "./context/sidebar";

const variant = tv({
  base: "flex gap-2 w-full bg-zinc-50 p-4 text-left transition-colors hover:bg-zinc-100 data-[state=close]:max-w-24 data-[state=close]:justify-center",
});

export type SidebarItemProps = {
  icon?: ElementType;
  asChild?: boolean;
} & HTMLAttributes<HTMLElement>;

export function Item({
  children,
  icon,
  asChild = false,
  className,
  ...rest
}: SidebarItemProps) {
  const Icon = icon;

  const { state } = useSidebar();

  if (asChild) {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        className: variant({ className }),
      } as any);
    }
  }

  return (
    <button {...rest} data-state={state} className={variant({ className })}>
      {Icon && <Icon />}
      <Text
        as="strong"
        data-state={state}
        className="data-[state=close]:hidden"
      >
        {children}
      </Text>
    </button>
  );
}
