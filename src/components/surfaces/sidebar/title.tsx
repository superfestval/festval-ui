import { HTMLAttributes } from "react";
import { Heading, HeadingProps } from "@/components/typograph/heading";

export type SidebarTitle = {} & HeadingProps;

export function Title({ children, ...rest }: SidebarTitle) {
  return (
    <Heading size="sm" {...rest}>
      {children}
    </Heading>
  );
}
