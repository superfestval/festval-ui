import { ElementType, ReactNode } from 'react';

export type RootProps = {
  icon?: ElementType;
  children: ReactNode;
};

export const Root = ({ children }: RootProps) => {
  return <div className="flex flex-col rounded bg-zinc-100">{children}</div>;
};
