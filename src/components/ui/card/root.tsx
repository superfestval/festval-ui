import { ElementType, ReactNode } from 'react';
import { tv } from "tailwind-variants";

export type RootProps = {
  icon?: ElementType;
  children: ReactNode;
} & React.HTMLAttributes<HTMLElement>;

const cardRootVariant = tv({
  base: "w-full flex flex-col rounded bg-zinc-100",
});

export const Root = ({ children, className, ...rest }: RootProps) => {
  return (
    <div className={cardRootVariant({ className })} {...rest}>
      {children}
    </div>
  );
};
