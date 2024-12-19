import { HTMLAttributes } from "react";

import { Popover } from "@/components/ui/popover";

export type MenuRootProps = {} & HTMLAttributes<HTMLElement>;

export function Root({ children, ...rest }: MenuRootProps) {
  return <Popover.Root {...rest}>{children}</Popover.Root>;
}
