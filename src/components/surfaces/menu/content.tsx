import { forwardRef, HTMLAttributes } from "react";

export type MenuContentProps = {} & HTMLAttributes<HTMLDivElement>;

export const Content = forwardRef<HTMLDivElement, MenuContentProps>(
  ({ children, ...rest }: MenuContentProps, ref) => {
    return (
      <div {...rest} ref={ref} className="w-full bg-zinc-50">
        {children}
      </div>
    );
  }
);
