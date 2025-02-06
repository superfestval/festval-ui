import { Text } from "@/components/typograph/text";
import { ElementType, HTMLAttributes } from "react";
import { useSidebar } from "./context/sidebar";

export type SidebarItemProps = {
  icon?: ElementType;
} & HTMLAttributes<HTMLElement>;

export function Item({ children, icon, ...rest }: SidebarItemProps) {
  const Icon = icon;

  const { state } = useSidebar();

  return (
    <button
      {...rest}
      data-state={state}
      className="flex w-full gap-2 bg-zinc-50 p-4 text-left transition-colors hover:bg-zinc-100 data-[state=close]:max-w-24 data-[state=close]:justify-center"
    >
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
