import { ReactNode } from "react";

export type TextProps = {
  children: ReactNode;
};

export const Text = ({ children }: TextProps) => {
  return <p className="text-md text-zinc-400">{children}</p>;
};
