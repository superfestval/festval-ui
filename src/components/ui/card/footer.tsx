import { HTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";

const cardfooterVariant = tv({
  base: "flex items-start justify-between rounded-t bg-zinc-100 p-4 rounded-b border-t border-t-zinc-200",
});

export type CardFooterProps = {} & HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardfooterVariant>;

export const CardFooter = ({
  children,
  className,
  ...rest
}: CardFooterProps) => {
  return (
    <div className={cardfooterVariant({ className })} {...rest}>
      {children}
    </div>
  );
};
