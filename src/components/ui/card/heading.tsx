import { ReactNode } from 'react';

export type CardHeadingProps = {
  children: ReactNode;
};

export const CardHeading = ({ children }: CardHeadingProps) => {
  return <h3 className="text-xl font-bold text-zinc-500">{children}</h3>;
};
