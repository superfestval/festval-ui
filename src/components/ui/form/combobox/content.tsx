import { PropsWithChildren } from "react";

export type ContentProps = {} & PropsWithChildren;

export function Content({ children }: ContentProps) {
  return <div className="p-2">{children}</div>;
}
