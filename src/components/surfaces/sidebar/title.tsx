import { Heading, HeadingProps } from "@/components/typograph/heading";

import { useSidebar } from "./context/sidebar";

export type SidebarTitleProps = {} & HeadingProps;

export function Title({ children, ...rest }: SidebarTitleProps) {
  const { state } = useSidebar();
  return (
    <Heading
      data-state={state}
      size="sm"
      className="data-[state=close]:hidden"
      {...rest}
    >
      {children}
    </Heading>
  );
}
