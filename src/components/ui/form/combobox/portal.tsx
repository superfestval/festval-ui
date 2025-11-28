import { PropsWithChildren } from "react";

export type PortalProps = {} & PropsWithChildren;

export function Portal({ children }: PortalProps) {
  return <div className="relative">{children}</div>;
}
