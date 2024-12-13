import { HTMLAttributes, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const variant = tv({
  base: 'flex-1 rounded-b bg-zinc-50 p-4',
});

export type BodyProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof variant>;

export const Body = ({ children, className, ...rest }: BodyProps) => {
  return (
    <div className={variant({ className })} {...rest}>
      {children}
    </div>
  );
};
