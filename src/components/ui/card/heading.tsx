import { ReactNode } from 'react';

export type HeadingProps = {
  children: ReactNode;
};

export const Heading = ({ children }: HeadingProps) => {
  return <h3 className="text-xl font-bold text-zinc-500">{children}</h3>;
};
