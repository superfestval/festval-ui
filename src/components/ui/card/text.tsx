import { ReactNode } from "react";

export type CardTextProps = {
  children: ReactNode;
};

export const CardText = ({ children, ...rest }: CardTextProps) => {
  return (
    <p className="text-md text-zinc-400" {...rest}>
      {children}
    </p>
  );
};
