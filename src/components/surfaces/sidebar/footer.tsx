import { HTMLAttributes } from "react";

import { useSidebar } from "./context/sidebar";

import { Avatar } from "@/components/ui/avatar";
import { Text } from "@/components/typograph/text";

export type User = {
  name: string;
  image: string;
  role: string;
};

export type SidebarFooterProps = {
  user: User;
} & HTMLAttributes<HTMLElement>;

export function Footer({ user, children, ...rest }: SidebarFooterProps) {
  const { state } = useSidebar();

  return (
    <div
      {...rest}
      data-state={state}
      className="w-full rounded-b data-[state=close]:max-w-24"
    >
      {children}
      <div className="flex items-center gap-2 rounded-b border-t border-t-zinc-200 bg-zinc-50 p-4">
        <Avatar image={user.image} username={user.name} />
        <div
          data-state={state}
          className="flex flex-col data-[state=close]:hidden"
        >
          <Text size="lg" as="strong">
            {user.name}
          </Text>
          <Text size="xs" as="small" className="-mt-1 text-zinc-400">
            {user.role}
          </Text>
        </div>
      </div>
    </div>
  );
}
